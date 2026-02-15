import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Use | Giorgio Studios',
  description:
    'Read the terms and conditions for using Giorgio Studios\' website and services.',
  openGraph: {
    title: 'Terms of Use | Giorgio Studios',
    description: 'Read the terms and conditions for using Giorgio Studios\' website.',
  },
}

export default function Terms() {
  return (
    <>
      <section className="py-16 md:py-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-dark-secondary mb-4">
              Terms of use of Giorgio Studios.
            </h2>
            <p className="text-dark mb-4">Last updated: February 15, 2026</p>
            <p className="text-dark mb-4">
              Please read these Terms and Conditions carefully before using the
              giorgiostudios.com website operated by Giorgio Studios (&quot;us&quot;, &quot;we&quot;, or
              &quot;our&quot;).
            </p>
            <p className="text-dark">
              By accessing or using the Service you agree to be bound by these
              Terms. If you disagree with any part of the terms then you may not
              access the Service.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-dark-secondary mb-3">
                Acceptable use
              </h2>
              <p className="text-dark">
                You must not use our website in any way or take any action that causes,
                or may cause, damage to the website or impairment of the performance,
                availability or accessibility of the website; use our website in any way
                that is unlawful, illegal, fraudulent or harmful, or in connection with
                any unlawful, illegal, fraudulent or harmful purpose or activity; use
                our website to copy, store, host, transmit, send, use, publish or
                distribute any material which consists of (or is linked to) any spyware,
                computer virus, Trojan horse, worm, keystroke logger, rootkit or other
                malicious computer software; conduct any systematic or automated data
                collection activities (including without limitation scraping, data
                mining, data extraction and data harvesting) on or in relation to our
                website without our express written consent; access or otherwise
                interact with our website using any robot, spider or other automated
                mean, except for the purpose of search engine indexing; violate the
                directives set out in the robots.txt file for our website; or use data
                collected from our website for any direct marketing activity (including
                without limitation email marketing, SMS marketing, telemarketing and
                direct mailing); use data collected from our website to contact
                individuals, companies or other persons or entities.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-dark-secondary mb-3">
                Cookies
              </h2>
              <p className="text-dark">
                We employ the use of cookies. By using Giorgio Studios&apos; website you consent to
                the use of cookies in accordance with Giorgio Studios&apos; privacy policy. Most of
                the modern day interactive websites use cookies to enable us to retrieve
                user details for each visit. Cookies are used in some areas of our site
                to enable the functionality of this area and ease of use for those
                people visiting. Some of our advertising partners may also use cookies.
                Unless otherwise stated, Giorgio Studios and its licensors own the intellectual
                property rights for all material on Giorgio Studios. All intellectual property
                rights are reserved. You may view and print pages from
                giorgiostudios.com for your own personal use subject to restrictions
                set in these terms and conditions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-dark-secondary mb-3">
                Links To Other Websites
              </h2>
              <p className="text-dark mb-3">
                Our Service may contain links to third-party web sites or services that
                are not owned or controlled by Giorgio Studios.
              </p>
              <p className="text-dark">
                Giorgio Studios has no control over, and assumes no responsibility for, the
                content, privacy policies, or practices of any third party web sites or
                services. You further acknowledge and agree that Giorgio Studios shall not be
                responsible or liable, directly or indirectly, for any damage or loss
                caused or alleged to be caused by or in connection with use of or
                reliance on any such content, goods or services available on or through
                any such websites or services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-dark-secondary mb-3">
                Breaches of these terms and conditions
              </h2>
              <p className="text-dark mb-3">
                Without prejudice to our other rights under these terms and conditions,
                if you breach these terms and conditions in any way, or if we reasonably
                suspect that you have breached these terms and conditions in any way, we
                may: send you one or more formal warnings; temporarily suspend your
                access to our website; permanently prohibit you from accessing our
                website; block computers using your IP address from accessing our
                website; contact any or all of your internet service providers and
                request that they block your access to our website; commence legal
                action against you, whether for breach of contract or otherwise; and/or
                suspend or delete your account on our website.
              </p>
              <p className="text-dark">
                Where we suspend or prohibit or block your access to our website or a
                part of our website, you must not take any action to circumvent such
                suspension or prohibition or blocking (including without limitation
                creating and/or using a different account).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-dark-secondary mb-3">
                Assignment
              </h2>
              <p className="text-dark mb-3">
                You hereby agree that we may assign, transfer, sub-contract or otherwise
                deal with our rights and/or obligations under these terms and
                conditions.
              </p>
              <p className="text-dark">
                You may not without our prior written consent assign, transfer,
                sub-contract or otherwise deal with any of your rights and/or
                obligations under these terms and conditions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-dark-secondary mb-3">
                Third party rights
              </h2>
              <p className="text-dark">
                A contract under these terms and conditions is for our benefit and your
                benefit, and is not intended to benefit or be enforceable by any third
                party. The exercise of the parties&apos; rights under a contract under these
                terms and conditions is not subject to the consent of any third party.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-dark-secondary mb-3">
                Changes
              </h2>
              <p className="text-dark">
                We reserve the right, at our sole discretion, to modify or replace these
                Terms at any time. If a revision is material we will try to provide at
                least 30 days&apos; notice prior to any new terms taking effect. What
                constitutes a material change will be determined at our sole discretion.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-dark-secondary mb-3">
                Contact Us
              </h2>
              <p className="text-dark">
                If you have any questions about these Terms, please contact us by
                email:{' '}
                <a
                  href="mailto:info@giorgiostudios.com"
                  className="text-primary hover:underline"
                >
                  info@giorgiostudios.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
