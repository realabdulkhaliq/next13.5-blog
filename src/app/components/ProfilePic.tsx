import Image from "next/image";
import Profile from "@/app/images/profile.png";

export default function ProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        src={Profile}
        alt="Abdul Khaliq"
        width={200}
        height={200}
        priority={true}
        className="border-4 border-black dark:border-slate-500 rounded-full mx-auto mt-8"
      />
    </section>
  );
}
