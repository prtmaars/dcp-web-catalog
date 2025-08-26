import { getDictionary } from "@/i18n/getDictionary";
import { notFound } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp, FaYoutube, FaFacebook } from "react-icons/fa";
import { teamMembers } from "./team";

export default async function ContactPage({ params }: { params: { lang: string } }) {
  const dict = getDictionary(params.lang as "id" | "en" | "ko");
  const lang = params.lang as "id" | "en" | "ko";

  if (!dict) return notFound();

  return (
    <>
    <div className="w-150 h-70 flex items-center justify-center mx-auto">
      <section>
        <img
        src="/logo.png"
        alt="Logo DCP"
        className="max-w-full max-h-full object-contain"
        />
      </section>
    </div>
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      {/* About Section */}
      <section>
        <h1 className="text-3xl font-bold mb-4">{dict.contact.aboutTitle}</h1>
        <p className="text-gray-700">{dict.contact.aboutDescription}</p>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{dict.contact.contactTitle}</h2>
        <p className="text-gray-700 mb-6">{dict.contact.contactDescription}</p>

        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gray-600" />
            <a
              href="mailto:dcptrainz@gmail.com"
              className="text-black hover:text-[#0589ee]"
            >
              dcptrainz@gmail.com
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-3">
            <FaWhatsapp className="w-5 h-5 text-green-600" />
            <a
              href="https://wa.me/62859106997891"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#0589ee]"
            >
              +62 859-1069-97891
            </a>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-3">
            <FaInstagram className="w-5 h-5 text-pink-600" />
            <a
              href="https://instagram.com/dcptrainz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#0589ee]"
            >
              dcptrainz
            </a>
          </div>

          {/* Facebook */}
          <div className="flex items-center gap-3">
            <FaFacebook className="w-5 h-5 text-blue-600" />
            <a
              href="https://web.facebook.com/dcpproduction"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#0589ee]"
            >
              DCP Production
            </a>
          </div>

          {/* YouTube */}
          <div className="flex items-center gap-3">
            <FaYoutube className="w-5 h-5 text-red-600" />
            <a
              href="https://youtube.com/@DCPTrainz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#0589ee]"
            >
              DCP Trainz
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h1 className="text-2xl font-semibold mb-6">
          {dict.contact.teamTitle}
        </h1>
        <p className="text-gray-700 mb-10">
          {dict.contact.teamDescription}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl shadow-md bg-white flex flex-col items-center text-center"
            >
              {/* Avatar default (pakai huruf pertama nama) */}
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-700 mb-4">
                {member.name.charAt(0)}
              </div>

              {/* Nama & Role */}
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{member.role[lang]}</p>

              {/* Sosmed */}
              <div className="flex gap-4">
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-500"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
}
