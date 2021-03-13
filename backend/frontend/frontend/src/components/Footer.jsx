import '../css/Footer.css'

function Footer() {

    var date = new Date()
    var year = date.getFullYear()

    return (
        <div>
            <p className='copyright-footer'>Copyright &#169; Jade Nash {year}</p>
        </div>
    )

}

export default Footer

