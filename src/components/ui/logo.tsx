import { cn } from "@/lib/utils"

function Logo({ className }: { className?: string }) {
  const logoClaro = "https://res.cloudinary.com/diskaptn0/image/upload/v1761750718/matiL2_xqzrlm.png"; 
  const logoDark = "https://res.cloudinary.com/diskaptn0/image/upload/v1761828331/logoDark_ys5f52.png"; 

  return (
    <>
      {/* 2. Imagen para TEMA CLARO */}
      <img
        src={logoDark}
        alt="Logo de Matias Baez (Tema Claro)" 
        className={cn(
          "w-full h-auto object-contain", 
          "block dark:hidden", 
          className 
        )}
        loading="lazy" 
        decoding="async" 
      />

      {/* 3. Imagen para TEMA OSCURO */}
      <img
        src={logoClaro}
        alt="Logo de Matias Baez (Tema Oscuro)" 
        className={cn(
          "w-full h-auto object-contain", 
          "hidden dark:block", 
          className 
        )}
        loading="lazy" 
        decoding="async" 
      />
    </>
  )
}

export default Logo;