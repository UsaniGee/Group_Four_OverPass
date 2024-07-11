const elementFromHtml = (sectionType) => {
    const element = document.createElement('section');
    let htmlContent;
  
    if (sectionType === 'first') {
      htmlContent = `
       <section class="first_section">
    <div class="first_section1">
        <div class="first_section1_text1"> Hiring remote <hr style="width: 330px; height: 5px; background: #000000;"> doesn't have <hr style="width: 310px; height: 5px; background: #000000;"> to suck <hr style="width: 180px; height: 5px; background: #000000;"></div>
        <div class="first_section1_text2">Gain instant & ongoing hiring assistance from real people, so that you can spend more time scaling your business and less energy finding the right fit for your team.</div>
        <div class="first_section1_div3">
            <input class="first_section1_div3_1" placeholder="Enter your email"></input>
            <button class="first_section1_div3_2">START HIRING</button>
        </div>
    </div>
    <div class="first_section2">
        <img class="first_section2_centerimg" src="/Assets/img/b4cf9000-8047-49a8-8dd5-d86845448ec9_Hiring+Hero.png" alt="">
        <img class="first_section2_img1" src="/Assets/img/1fa4c4e3-c127-477f-85df-98e17ccabcdb_avatar1.jpg" alt="">
        <div class="first_section2_blue"></div>
        <img class="first_section2_img2" src="/Assets/img/2e190b4b-12e3-4d63-a26b-f6ad062a83d4_avatar2.jpg" alt="">
        <img class="first_section2_img3" src="/Assets/img/2eb6f3de-1416-4948-8917-30854a736c53_avatar+15.png" alt="">
        <div class="first_section2_green"></div>
        <div class="first_section2_orange1"></div>
        <img class="first_section2_img4" src="/Assets/img/46ffabb5-63c3-4767-89d3-250deb28c953_avatar+11+6.png" alt="">
        <div class="first_section2_yellow"></div>
        <div class="first_section2_orange2"></div>
    </div>
</section>
      `;
    } 
    else if (sectionType === 'second') {
      htmlContent = `
         <section class="second-section">
    <div class="second-section_div1">
        <img src="/Assets/img/cd5454aa-2682-4ef1-b754-1d9a18772e31_Screened.png" class="second-section_div1img"></img>
    </div>
    <div class="second-section_div2">
        <div class="second-section_div2_text1">1. Vetted  & Experienced</div>
        <div class="second-section_div2_textmain">
            <div class="second-section_div2_text2">Pre-screened,</div> <hr style="width: 320px; height: 5px; background: white;">
            <div class="second-section_div2_text3">just for you</div> <hr style="width: 260px; height: 5px; background: white;">
        </div>
        <div class="second-section_div2_text4">With a talent pool of over thousands qualified & industry-specialized, remote sales & support talent at your fingertips, you’ll rest assured knowing that you’ve hired someone as committed to your business as you are.</div>
    </div>
    <div></div>
 </section>
      `;
    } 
    else if (sectionType === 'third') {
      htmlContent = `
        ... your HTML structure for the second section ...
      `;
    } 
    else if (sectionType === 'fourth') {
      htmlContent = `
        ... your HTML structure for the second section ...
      `;
    } 
    else {}
  
    element.innerHTML = htmlContent;
    return element;
  }
  
  
  const firstSection = elementFromHtml('first');
  document.getElementById('root').appendChild(firstSection);
  
  const secondSection = elementFromHtml('second');
  document.getElementById('root').appendChild(secondSection);
  
  const thirdSection = elementFromHtml('third');
  document.getElementById('root').appendChild(thirdSection);
  
  const fourthSection = elementFromHtml('fourth');
  document.getElementById('root').appendChild(fourthSection);
  