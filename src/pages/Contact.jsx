import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactHome from '../components/ContactHome'
import onTheWorkMe from '../assets/images/onTheWorkMe.jpg'


const Contact = () => {

    const contactData = [
        {title: 'Contact Me', description: 'Interested in working together or have any inquiries? Contact me and let’s discuss how I can help bring your ideas to life.', image: onTheWorkMe}
    ]
  return (
    <div className='flex flex-col mt-10'>

        <Navbar />

        <ContactHome data={contactData} />

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptas cupiditate repellendus architecto nostrum vero molestias aspernatur ducimus maxime id. Deserunt ullam explicabo vel nobis atque est voluptatem fuga. Earum ullam architecto ratione voluptatum sapiente in itaque dolorem laboriosam, consequatur pariatur nostrum optio a sequi reiciendis, possimus maxime atque blanditiis nemo fugit. Incidunt, sapiente provident tempora reiciendis deserunt itaque similique vitae facere reprehenderit blanditiis vel saepe nesciunt tempore accusamus. Amet, sunt. Tenetur accusamus veritatis voluptate, eos aliquam est. Rerum repellat asperiores, rem quam exercitationem perspiciatis dolores nam, ut aut voluptatem praesentium ab debitis doloribus sed deleniti aperiam suscipit quas ducimus alias dolorem harum. Iure soluta temporibus fugiat labore dolore ex tenetur nam. Dicta earum numquam delectus dolor illum sequi autem, in, nostrum similique eligendi vel odit laudantium corporis enim, recusandae inventore assumenda incidunt. Eligendi similique, quo ad odio voluptates deserunt! Possimus suscipit quam qui itaque recusandae! Molestiae, delectus atque praesentium ipsam cum maxime suscipit molestias rerum iusto porro rem soluta obcaecati sapiente eos officia sed excepturi sequi ea amet illo ipsum. Beatae eligendi corporis illo et harum praesentium eaque impedit, dolores nemo mollitia? Sequi odit eveniet expedita accusamus ea deleniti illo impedit repellendus et rem similique odio esse, sunt repudiandae.
        <Footer />
    </div>
  )
}

export default Contact