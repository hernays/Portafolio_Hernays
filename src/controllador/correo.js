import  transporter  from "../configMailer.js";

const correoController = async (req, res) => {
    const { nombre, correo, mensaje } = req.body;
    if (nombre, correo, mensaje) {

        await transporter.sendMail({
            from: 'hernays12@gmail.com', // sender address
            to: 'hernays12@gmail.com', // list of receivers
            subject: `${nombre}`, // Subject line
            html: `<h3>De: ${correo} <br> <br> <hr>${mensaje}</h3>`
        });
        return res.status(200).json({
            msg: 'Mensaje Enviado'
        })
    } else {
        return res.status(500).json({
            msg: 'Ocurrio un Error Siga Intentando'
        })
    }
}

export default correoController;