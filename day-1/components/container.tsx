import { cn } from "@/lib/utils"


const Container = ({
    children,
    className
}: {
    children: React.ReactNode,
    className?: string
}) => {
  return (
    <div className={cn("max-w-7xl mx-auto px-2 md:py-3", className)}>
        {children}
    </div>
  )
}

export default Container