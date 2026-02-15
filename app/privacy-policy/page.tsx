import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Giorgio Studios',
  description:
    'Learn how Giorgio Studios collects, uses, and protects your personal data. Read our comprehensive privacy policy.',
  openGraph: {
    title: 'Privacy Policy | Giorgio Studios',
    description: 'Learn how Giorgio Studios collects, uses, and protects your personal data.',
  },
}

export default function PrivacyPolicy() {
  return (
    <>
      <section className="py-16 md:py-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-dark-secondary mb-4">
              Privacy Policy of Giorgio Studios.
            </h2>
            <p className="text-dark mb-4">Effective date: February 15, 2026</p>
            <p className="text-dark mb-4">
              Giorgio Studios (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates the
              giorgiostudios.com website (the &quot;Service&quot;). This page informs you
              of our policies regarding the collection, use, and disclosure of
              personal data when you use our Service and the choices you have
              associated with that data.
            </p>
            <p className="text-dark">
              We use your data to provide and improve the Service. By using the
              Service, you agree to the collection and use of information in
              accordance with this policy. Unless otherwise defined in this Privacy
              Policy, terms used in this Privacy Policy have the same meanings as in
              our Terms and Conditions, accessible from giorgiostudios.com
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-dark-secondary mb-3">
                Information Collection And Use
              </h2>
              <p className="text-dark">
                We collect several different types of information for various purposes
                to provide and improve our Service to you.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-dark-secondary mb-3">
                Types of Data Collected
              </h2>
              <h3 className="text-lg font-semibold text-dark-secondary mb-2">
                Personal Data
              </h3>
              <p className="text-dark mb-3">
                While using our Service, we may ask you to provide us with certain
                personally identifiable information that can be used to contact or
                identify you (&quot;Personal Data&quot;). Personally identifiable information may
                include, but is not limited to:
              </p>
              <ul className="list-disc pl-6 text-dark space-y-1 mb-4">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Cookies and Usage Data</li>
              </ul>

              <h3 className="text-lg font-semibold text-dark-secondary mb-2">
                Usage Data
              </h3>
              <p className="text-dark mb-4">
                We may also collect information how the Service is accessed and used
                (&quot;Usage Data&quot;). This Usage Data may include information such as your
                computer&apos;s Internet Protocol address (e.g. IP address), browser type,
                browser version, the pages of our Service that you visit, the time and
                date of your visit, the time spent on those pages, unique device
                identifiers and other diagnostic data.
              </p>

              <h3 className="text-lg font-semibold text-dark-secondary mb-2">
                Tracking &amp; Cookies Data
              </h3>
              <p className="text-dark mb-3">
                We use cookies and similar tracking technologies to track the activity
                on our Service and hold certain information.
              </p>
              <p className="text-dark mb-3">
                Cookies are files with small amount of data which may include an
                anonymous unique identifier. Cookies are sent to your browser from a
                website and stored on your device. Tracking technologies also used are
                beacons, tags, and scripts to collect and track information and to
                improve and analyze our Service.
              </p>
              <p className="text-dark mb-3">
                You can instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent. However, if you do not accept cookies, you may
                not be able to use some portions of our Service.
              </p>
              <p className="text-dark mb-2">Examples of Cookies we use:</p>
              <ul className="list-disc pl-6 text-dark space-y-1">
                <li>Session Cookies. We use Session Cookies to operate our Service.</li>
                <li>
                  Preference Cookies. We use Preference Cookies to remember your
                  preferences and various settings.
                </li>
                <li>
                  Security Cookies. We use Security Cookies for security purposes.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-dark-secondary mb-3">
                Use of Data
              </h2>
              <p className="text-dark mb-2">Giorgio Studios uses the collected data for various purposes:</p>
              <ul className="list-disc pl-6 text-dark space-y-1">
                <li>To provide and maintain the Service</li>
                <li>To notify you about changes to our Service</li>
                <li>
                  To allow you to participate in interactive features of our Service
                  when you choose to do so
                </li>
                <li>To provide customer care and support</li>
                <li>
                  To provide analysis or valuable information so that we can improve the
                  Service
                </li>
                <li>To monitor the usage of the Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-dark-secondary mb-3">
                Transfer Of Data
              </h2>
              <p className="text-dark mb-3">
                Your information, including Personal Data, may be transferred to — and
                maintained on — computers located outside of your state, province,
                country or other governmental jurisdiction where the data protection
                laws may differ than those from your jurisdiction.
              </p>
              <p className="text-dark mb-3">
                Your consent to this Privacy Policy followed by your submission of such
                information represents your agreement to that transfer.
              </p>
              <p className="text-dark">
                Giorgio Studios will take all steps reasonably necessary to ensure that your
                data is treated securely and in accordance with this Privacy Policy and
                no transfer of your Personal Data will take place to an organization or
                a country unless there are adequate controls in place including the
                security of your data and other personal information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-dark-secondary mb-3">
                Disclosure Of Data
              </h2>
              <h3 className="text-lg font-semibold text-dark-secondary mb-2">
                Legal Requirements
              </h3>
              <p className="text-dark mb-2">
                Giorgio Studios may disclose your Personal Data in the good faith belief that
                such action is necessary to:
              </p>
              <ul className="list-disc pl-6 text-dark space-y-1 mb-4">
                <li>To comply with a legal obligation</li>
                <li>To protect and defend the rights or property of Giorgio Studios</li>
                <li>
                  To prevent or investigate possible wrongdoing in connection with the
                  Service
                </li>
                <li>
                  To protect the personal safety of users of the Service or the public
                </li>
                <li>To protect against legal liability</li>
              </ul>

              <h3 className="text-lg font-semibold text-dark-secondary mb-2">
                Security Of Data
              </h3>
              <p className="text-dark mb-4">
                The security of your data is important to us, but remember that no
                method of transmission over the Internet, or method of electronic
                storage is 100% secure. While we strive to use commercially acceptable
                means to protect your Personal Data, we cannot guarantee its absolute
                security.
              </p>

              <h3 className="text-lg font-semibold text-dark-secondary mb-2">
                Service Providers
              </h3>
              <p className="text-dark mb-3">
                We may employ third party companies and individuals to facilitate our
                Service (&quot;Service Providers&quot;), to provide the Service on our behalf, to
                perform Service-related services or to assist us in analyzing how our
                Service is used.
              </p>
              <p className="text-dark">
                These third parties have access to your Personal Data only to perform
                these tasks on our behalf and are obligated not to disclose or use it
                for any other purpose.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-dark-secondary mb-3">
                Analytics
              </h2>
              <p className="text-dark mb-2">
                We may use third-party Service Providers to monitor and analyze the use
                of our Service.
              </p>
              <ul className="list-disc pl-6 text-dark space-y-2">
                <li>Google Analytics</li>
                <li>
                  Google Analytics is a web analytics service offered by Google that
                  tracks and reports website traffic. Google uses the data collected to
                  track and monitor the use of our Service. This data is shared with
                  other Google services. Google may use the collected data to
                  contextualize and personalize the ads of its own advertising network.
                </li>
                <li>
                  For more information on the privacy practices of Google, please visit
                  the Google Privacy &amp; Terms web page:{' '}
                  <a
                    href="https://policies.google.com/privacy?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://policies.google.com/privacy?hl=en
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-dark-secondary mb-3">
                Children&apos;s Privacy
              </h2>
              <p className="text-dark mb-3">
                Our Service does not address anyone under the age of 18 (&quot;Children&quot;).
              </p>
              <p className="text-dark">
                We do not knowingly collect personally identifiable information from
                anyone under the age of 18. If you are a parent or guardian and you are
                aware that your Children has provided us with Personal Data, please
                contact us. If we become aware that we have collected Personal Data from
                children without verification of parental consent, we take steps to
                remove that information from our servers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-dark-secondary mb-3">
                Changes To This Privacy Policy
              </h2>
              <p className="text-dark">
                We may update our Privacy Policy from time to time. We will notify you
                of any changes by posting the new Privacy Policy on this page. You are
                advised to review this Privacy Policy periodically for any changes.
                Changes to this Privacy Policy are effective when they are posted on
                this page.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-dark-secondary mb-3">
                Contact Us
              </h2>
              <p className="text-dark">
                If you have any questions about this Privacy Policy, please contact us
                by email:{' '}
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
