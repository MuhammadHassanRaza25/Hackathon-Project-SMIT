import React from 'react';
import { Collapse } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

function FAQsSections(){

    const text1 = `Saylani Microfinance is a program by Saylani Welfare International Trust that provides small loans to underprivileged individuals and small businesses to help them become financially independent.`;
    const text2 = `You can apply for a loan by visiting our nearest branch or filling out an online application form on our website. Our team will review your application and contact you for further steps.`;
    const text3 = `Alongside microfinance and IT education, Saylani Welfare International Trust delivers a diverse range of services, such as free medical assistance, food distribution, clean water initiatives, and disaster relief operations.`;
    const text4 = `Donate to Saylani via our website, mobile app, or by visiting any of our offices. We accept a variety of donations, including cash, goods, and zakat`;

  const items = [
    {
      key: '1',
      label: 'What is Saylani Microfinance?',
      children: <p>{text1}</p>,
    },
    {
      key: '2',
      label: 'How can i apply for a loan?',
      children: <p>{text2}</p>,
    },
    {
      key: '3',
      label: 'What other services does Saylani Welfare International Trust offer?',
      children: <p>{text3}</p>,
    },
    {
      key: '4',
      label: 'How can i donate Saylani Welfare International Trust?',
      children: <p>{text4}</p>,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

    return(
        <>
          <div className='mt-10 py-16 flex flex-col gap-15 justify-center items-center bg-white'>
          <h1 className='flex justify-center items-center gap-3 font-bold lg:text-3xl text-xl'>Frequently Asked Questions <QuestionCircleOutlined /></h1>

             <Collapse 
             items={items} 
             onChange={onChange} 
             className='faqs'
             style={{width: '60vw', padding: '10px', fontWeight: '600', fontSize: '15px', backgroundColor: 'white'}}/>
          </div>
        </>
    )
}

export default FAQsSections;