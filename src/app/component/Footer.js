import React from 'react'
import Image from 'next/image'
import LocationSvg from '../../../public/images/location.svg'
import PhoneSvg from '../../../public/images/phone.svg'
import WhatsappSvg from '../../../public/images/wtsapp.svg'
import MailSvg from '../../../public/images/mail.svg'
import Link from 'next/link'

const Footer = ({ FooterData, menuData }) => {
  return (
    <footer className="bg-salte w-full">
      <div className="container mx-auto px-[15px] ">
        <div className="flex gap-6 lg:gap-8 2xl:gap-[90px] justify-between lg:flex-nowrap flex-wrap py-8 md:py-20">
          <div className="flex flex-col md:w-auto w-full gap-4">
            <h3>Kontakt</h3>
            <ul className="[&>li]:flex [&>li]:justify-start [&>li]:items-start">
              <li>
                <span className="flex flex-shrink-0">
                  <Image src={LocationSvg} alt="location-svg" className="mt-[5px]" />
                </span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: FooterData?.contact?.address.text || '',
                  }}
                  className="w-full "
                />
              </li>
              <li>
                <span className="flex flex-shrink-0">
                  <Image src={PhoneSvg} alt="phone-svg" className="mt-[5px]" />
                </span>
                {FooterData?.contact.phone && (
                  <Link
                    href={FooterData?.contact.phone.url}
                    target={'_blank'}
                    aria-label="phone-link"
                    role="link"
                  >
                    {FooterData?.contact.phone.text}
                  </Link>
                )}
              </li>
              <li>
                <span className="flex flex-shrink-0">
                  <Image
                    src={WhatsappSvg}
                    alt="whatsapp-svg"
                    className="mt-[5px] w-[18px] h-[18px]"
                  />
                </span>
                {FooterData?.contact.whatsaap && (
                  <Link
                    href={FooterData?.contact?.whatsaap?.url}
                    target={'_blank'}
                    aria-label="phone-link"
                    role="link"
                  >
                    {FooterData?.contact?.whatsaap?.text}
                  </Link>
                )}
              </li>
              <li>
                <span className="flex flex-shrink-0">
                  <Image src={MailSvg} alt="MailSvg" className="mt-[5px]" />
                </span>
                {FooterData?.contact.email && (
                  <Link
                    href={FooterData?.contact.email.url}
                    target={'_blank'}
                    aria-label="email-link"
                    role="link"
                  >
                    {FooterData?.contact.email.text}
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:w-auto w-full gap-4 sm:gap-6">
            <h4>Sprechzeiten</h4>
            <ul className="time-menu ">
              {FooterData?.sprechzeiten?.map((item, i) => {
                return (
                  <li key={i}>
                    <span>{item.tag}</span>
                    <span>{item.zeit} Uhr</span>
                  </li>
                )
              })}
              <li>und nach Vereinbarung</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 md:w-auto w-full sm:gap-6">
            <h4>Navigation</h4>
            <ul>
              {menuData[0]?.items?.map((item, i) => {
                return (
                  <li key={i}>
                    <Link href={`/${item.url}`} aria-label="footer-link" role="link">
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-4 md:w-auto w-full sm:gap-6">
            <h4>Rechtliches</h4>
            <ul>
              <li>
                <Link href="/impressum" aria-label="footer-link" role="link">
                  Impressum{' '}
                </Link>
              </li>
              <li>
                <Link href="/datenschutzerklarung" aria-label="footer-link" role="link">
                  Datenschutzerklärung
                </Link>
              </li>
            </ul>
            <ul className="flex flex-row [&_li]:w-[38px] [&_li]:h-[38px] [&_li]:bg-Teal [&_li]:rounded-full [&_li]:items-center [&_li]:justify-center [&_li]:p-2">
              {FooterData?.contact?.social?.map((item, i) => {
                return (
                  <li className="flex items-center justify-center" key={i}>
                    <Link
                      href={item?.url}
                      target={'_blank'}
                      aria-label="facebook-link"
                      role="link"
                      className="inline-block "
                    >
                      <Image src={item.platform?.url} width={38} height={38} alt="social-svg" />
                    </Link>
                  </li>
                )
              })}
            </ul>
            <ul className="flex flex-row ">
              {FooterData?.company_logos?.map((val, index) => {
                return (
                <li className="flex w-[100px] h-[100px] overflow-hidden" key={index}>
                  {val.logo?.url ? (
                    <Link href={'/'} target={'/'} aria-label="image-link" role="link">
                      <Image
                        src={val.logo?.url}
                        width={150}
                        height={150}
                        alt="GVPimg"
                        className="object-cover rounded-[10px]"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={val.logo?.url}
                      width={150}
                      height={150}
                      alt="GVPimg"
                      className="object-cover rounded-[10px]"
                    />
                  )}
                </li>
              )
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
