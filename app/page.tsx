import Image from "next/image";
import InfoCard from "./components/InfoCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 p-10">
      <section>
        <h1 className="text-[#34b4a7] my-6 font-bold text-4xl tracking-tight">
          Passwords
        </h1>
        <div className="grid grid-cols-2 gap-8 mt-6">
          <InfoCard
            tintColor="#34b3a7"
            title="All your credentials in one place"
            description="From passwords to verifications and security alerts, find them all securely in the Passwords app."
            detailContent="Backed by secure end-to-end encryption and seamless syncing, the Passwords app safely stores all your credentials. It lets you filter and sort accounts by recently created, credential type, or whether an account is in a shared group, to quickly find accounts you're looking for."
          >
            <div className="relative max-w-[400px] mx-auto mt-20">
              <Image
                src="/iphone-mock.png"
                alt="Passwords app"
                width="400"
                height="400"
                className="object-contain lg:object-cover object-top"
              />
            </div>
          </InfoCard>
          <InfoCard
            tintColor="#34b3a7"
            title="Securely synced across devices and apps"
            detailContent="Access the Passwords app on iPhone, iPad, Mac and Apple Vision Pro, and on Windows with the iCloud for Windows app. All the passwords sync securely across your devices, and if you use AutoFill, your passwords will automatically be added to the Passwords app."
          >
            <div className="w-full flex-1 flex flex-col justify-center">
              <p className="text-[3.5rem] font-medium leading-tight tracking-tight">
                Works across iPhone, iPad, Mac, Apple Vision Pro, and Windows.
              </p>
            </div>
          </InfoCard>
        </div>
      </section>
    </main>
  );
}
