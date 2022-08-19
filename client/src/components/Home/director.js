import React from 'react';

function Director() {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">

            <div className="lg:w-1/2 lg:mb-0 mb-6 mx-auto p-4">

              <div className="h-full text-center ">
                <img alt="testimonial" className="md:w-96 sm:w-72 sm:h-72 md:h-96 mb-8 object-cover object-center hover:-translate-y-3 ease-in duration-300 p-1 mx-auto inline-block border-2 border-gray-200 bg-gray-300" src="../images/user.png" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">PRADEEP PRAJAPATI</h2>
                <p className="text-gray-500">Managing Director</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
              </div>

            </div>

            <div className="lg:w-1/2 lg:mb-0 mb-6 p-4 mx-auto">
              <div className="h-full text-center">
                <img alt="testimonial" className="md:w-96 sm:w-72 sm:h-72 md:h-96 mb-8 object-cover object-center hover:-translate-y-3 ease-in duration-300 p-1 inline-block  bg-gray-300" src="../images/user.png" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">CHETNA</h2>
                <p className="text-gray-500">Academic Director</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
              </div>
            </div>

          </div>

          <div>
                <p className="leading-relaxed font-lato w-11/12 mx-auto">Dear students, 
                Welcome to Vulture Institute 

                We would like to communicate our appreciation for your belief instilled in Vulture.
                Your faith in us has made VULTURE INSTITUTE the fastest growing and best coaching
                institute for JEE , NEET , NTSE and Olympiads preparation in Narnaul.

                We believe that in order to excel and to improve the quality of education on a consistent basis.
                It is required to persistently seek and adopt innovative methods. Hence, we at vulture institute are constantly
                putting in our efforts to transfer the knowledge of our esteemed faculty members to the young minds who have accepted the 
                challenge to produce the brightest technocrats and medicos of the country. The excellent teaching standards at vulture spur us to pursue
                relentless excellence.

                We assure you that your time at vulture institute is going to be the most pleasant experience over our success lies in your accomplishment.

                Wishing you all the best for your future endeavours
                Sincerely,
                Pradeep and Chetna
    </p>
          </div>

        </div>
      </section>
  );
}

export default Director;