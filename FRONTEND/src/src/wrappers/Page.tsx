import { ReactNode } from "react"

type PageProps = {
    children: ReactNode;
    page?: string,
  };

const Page = ({children,page}:PageProps) => {
  
  return (
    <section className={`flex justify-center items-center ${page === "home" ? "h-screen" :""}  m-auto bg-[#0C0F19] text-white flex-col gap-20 px-10 py-4`}>
        {children}
    </section>
  )
}

export default Page