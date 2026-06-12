import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder_build")

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, rut, email, telefono, empresa, mensaje } = body

    // Validar campos requeridos
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Crear contenido del email
    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #003B7A; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background-color: #f5f5f5; padding: 20px; border-radius: 0 0 8px 8px; }
    .field { margin: 15px 0; }
    .label { font-weight: bold; color: #003B7A; }
    .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 4px solid #FF6B35; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Nueva Solicitud de Asesoría - Mapeos 360°</h2>
    </div>
    <div class="content">
      <p><strong>¡Hola!</strong> Has recibido una nueva solicitud a través del formulario de contacto de Mapeos 360°.</p>
      
      <div class="field">
        <div class="label">👤 Nombre y Apellido:</div>
        <div class="value">${nombre}</div>
      </div>

      ${rut ? `<div class="field"><div class="label">🆔 RUT:</div><div class="value">${rut}</div></div>` : ''}

      <div class="field">
        <div class="label">📧 Email:</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>

      ${telefono ? `<div class="field"><div class="label">📱 Teléfono:</div><div class="value">${telefono}</div></div>` : ''}

      ${empresa ? `<div class="field"><div class="label">🏢 Empresa o Rubro:</div><div class="value">${empresa}</div></div>` : ''}

      <div class="field">
        <div class="label">💬 Mensaje:</div>
        <div class="value">${mensaje.replace(/\n/g, '<br>')}</div>
      </div>

      <div class="footer">
        <p>Este email fue enviado automáticamente desde el formulario de contacto de Mapeos 360°.</p>
        <p>Para responder, contacta directamente a: <strong>${email}</strong></p>
      </div>
    </div>
  </div>
</body>
</html>
    `

    // ENVIAR CON RESEND
    await resend.emails.send({
      from: 'Mapeos 360° <noreply@mapeos360.vercel.app>',
      to: 'comercialotec@otecachsservicios.cl',
      replyTo: email,
      subject: `Solicitud de asesoría en Mapeos 360° - ${nombre}`,
      html: emailContent,
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Tu solicitud ha sido enviada correctamente. Un especialista se pondrá en contacto pronto.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error al enviar email:', error)
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    )
  }
}
