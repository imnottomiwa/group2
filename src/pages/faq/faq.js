import './faq.css';
import Faq from "react-faq-component";


import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TextField } from '@mui/material';
import Card from '@mui/material/Card';

const images = [
  {
    src: "/2.jpg",
    width: 320,
    height: 174,
    isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)",
 },
 {
    src: "/1.jpg",
    width: 320,
    height: 212,
    tags: [
       { value: "Ocean", title: "Ocean" },
       { value: "People", title: "People" },
    ],
    alt: "Boats (Jeshu John - designerspics.com)",
 },

 {
    src: "/3.webp",
    width: 320,
    height: 212,
 },
 {
  src: "/6.webp",
  width: 320,
  height: 174,
  isSelected: true,
  caption: "After Rain (Jeshu John - designerspics.com)",
},
{
  src: "/5.webp",
  width: 320,
  height: 212,
  tags: [
     { value: "Ocean", title: "Ocean" },
     { value: "People", title: "People" },
  ],
  alt: "Boats (Jeshu John - designerspics.com)",
},

{
  src: "/4.webp",
  width: 320,
  height: 212,
},
];


const data = {
    rows: [
        {
            title: "Can I change my plan later?",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "What is your cancellation policy?",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Can other info be added to an invoice?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
          title: "How does billing work?",
          content: <p>current version is 1.2.1</p>,
      },
      {
        title: "How do I change my account email?",
        content: <p>current version is 1.2.1</p>,
    },
    ],
};

const styles = {
    // bgColor: 'white',
    rowTitleColor: "#'Hello World'1828",
    rowContentColor: '#667085',
    rowContentPaddingTop: '8px',
    rowContentPaddingBottom: '8px',
    rowContentTextSize: '13px',
    arrowColor: "#1570EF",
  };
  
  
  const config = {
    // animate: true,
    // arrowIcon: "V",
    expandIcon: "+",
    collapseIcon: "-",
};
let age=4
function FaqPage() {
  return (
    <div >
      


<section className='feature_section'> 
    <h5>Feature</h5>
    <h3 >Unlock Yourself</h3>
    <p>Daily personalized fitness, sleep, and recovery data delivered to you in real time with Untitled. We’re changing how you move.</p>
    <div className='feature_cards'>
      <div className='feature_card'>
        <h4>Access To Daily Data</h4>
        <p>Optimize the way you recover, train, and sleep with daily reporting on mobile and desktop apps. Start training smarter, not harder.

        </p>
        <a href="">Learn More</a>
      </div>
      <div className='feature_card'>
        <h4>Access To Daily Data</h4>
        <p>Optimize the way you recover, train, and sleep with daily reporting on mobile and desktop apps. Start training smarter, not harder.

        </p>
        <a href="">Learn More</a>
      </div>
      <div className='feature_card'>
        <h4>Access To Daily Data</h4>
        <p>Optimize the way you recover, train, and sleep with daily reporting on mobile and desktop apps. Start training smarter, not harder.

        </p>
        <a href="">Learn More</a>
      </div>
    </div>
    </section>

    <section className='form_section'>
      <h2>Take A Quick Quiz To Kow</h2>
      <form>



      <TextField id="outlined-basic" label="First Name" variant="outlined" />

<TextField id="outlined-basic" label="Last Name" variant="outlined" />


<br/>
<br/>
<br/>
<FormControl fullWidth>
<InputLabel id="demo-simple-select-label">Have you had Diarrhea before</InputLabel>

  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
  >
    <MenuItem value={'Hello World'}>Yes</MenuItem>
    <MenuItem value={20}>No</MenuItem>
    <MenuItem value={30}>I cant remember</MenuItem>
  </Select> <br/>
  
</FormControl>

<br/>
<FormControl fullWidth>
<InputLabel id="demo-simple-select-label">Gender</InputLabel>

  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
  >
    <MenuItem value={'Hello World'}>Male</MenuItem>
    <MenuItem value={20}>Female</MenuItem>
    <MenuItem value={30}>Non Binary</MenuItem>
  </Select> <br/>
  
</FormControl>
<br/>
<FormControl fullWidth>
<InputLabel id="demo-simple-select-label">Have you been stooling</InputLabel>

  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select-standard"
    value={age}
    label="Age"
  >
    <MenuItem value={'Hello World'}>Yes</MenuItem>
    <MenuItem value={20}>No</MenuItem>
    <MenuItem value={30}>I can't say</MenuItem>
  </Select> <br/>
  
</FormControl>
<br/>
<FormControl fullWidth>
<InputLabel id="demo-simple-select-label">Do you use anti biotics</InputLabel>

  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select-standard"
    value={age}
    label="How Log"
  >
    <MenuItem value={'Hello World'}>Yes</MenuItem>
    <MenuItem value={20}>No</MenuItem>
  </Select> <br/>
  
</FormControl>


<br/>
<FormControl fullWidth>
<InputLabel id="demo-simple-select-label">Do you have any food intoleraces</InputLabel>

  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select-standard"
    value={age}
    label="How Log"
  >
    <MenuItem value={'Hello World'}>Yes</MenuItem>
    <MenuItem value={20}>No</MenuItem>
  </Select> <br/>
  
</FormControl>
<br/>
<FormControl fullWidth>
<InputLabel id="demo-simple-select-label">Do you have bloody stool</InputLabel>

  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select-standard"
    value={age}
    label="How Log"
  >
    <MenuItem value={'Hello World'}>Yes</MenuItem>
    <MenuItem value={20}>No</MenuItem>
  </Select> <br/>
  
</FormControl>


<br/>
<FormControl fullWidth>
<InputLabel id="demo-simple-select-label">Do you have a fever</InputLabel>

  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select-standard"
    value={age}
    label="How Log"
  >
    <MenuItem value={'Hello World'}>Yes</MenuItem>
    <MenuItem value={20}>No</MenuItem>
  </Select> <br/>
  
</FormControl>

<br/>
<FormControl fullWidth>
<InputLabel id="demo-simple-select-label">Do you have enough hygine education</InputLabel>

  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select-standard"
    value={age}
    label="How Log"
  >
    <MenuItem value={'Hello World'}>Yes</MenuItem>
    <MenuItem value={20}>No</MenuItem>
  </Select> <br/>
  
</FormControl>
<br/>
<FormControl fullWidth>
<InputLabel id="demo-simple-select-label">Do you aware of the causes of Diarrhea?</InputLabel>

  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select-standard"
    value={age}
    label="How Log"
  >
    <MenuItem value={'Hello World'}>Yes</MenuItem>
    <MenuItem value={20}>No</MenuItem>
  </Select> <br/>
  
</FormControl>


<button type="Submit">Submit </button>

      </form>
    </section>

    <section className='cards'>
    <div className='card'>
        <h2>What we do</h2>
        <p>
          my name is alvan and i know how to code with this
        </p>
      </div>
      <div className='card'>
        <h2>What we do</h2>
        <p>
          my name is alvan and i know how to code with this
        </p>
      </div>
      <div className='card'>
        <h2>What we do</h2>
        <p>
          my name is alvan and i know how to code with this
        </p>
      </div>
      <div className='card'>
        <h2>What we do</h2>
        <p>
          my name is alvan and i know how to code with this
        </p>
      </div>
      <div className='card'>
        <h2>What we do</h2>
        <p>
          my name is alvan and i know how to code with this
        </p>
      </div>
      
      
    </section>
      

    <section>
      <h2 className='faq_title'>Frequently Asked Questions

</h2>
  <p className='faq_des'>Everything you need to know about Diarrhea And Its Symptoms</p>
  <div className='faq_contents'>
    <Faq
          data={data}
          styles={styles}
          config={config}
      />
  </div>
      </section>

   

    <section className='contact_us_section'>
      
      <h2>Get In Touch</h2>
      <p>Our friendly team would love to hear from you.</p>
      <form
          id="form"
          method="POST"
          netlify
          action="https://formspree.io/f/xoqyyayr"
        >
          
          <input
            name="name"
            required
            id="name_input"
            placeholder="Name: "
            class="form_input"
            type="text"
          />

          
          <input
            name="_replyto"
            required
            id="email_input"
            placeholder="Email: "
            class="form_input"
            type="email"
          />

          <input
            type="hidden"
            name="_next"
            value="https://mywebsite.com/thanks.html"
          />

          <textarea
            required
            placeholder="Send Us A Message:"
            name="contact"
            id="contact_us_textarea"
            class="contactus_textarea"
            cols="30"
            rows="'Hello World'"
          ></textarea>
          <br/>
          <br/>
          <br/>
          <div class="submit_button">
            <button class="read_more" type="submit">SEND</button>
          </div>
        </form>

    </section>
  
    
    </div>
  );
}

export default FaqPage;
