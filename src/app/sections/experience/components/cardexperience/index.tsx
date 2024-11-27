import { Container } from "@/app/components/container"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface CardExperienceProps {
  title: string
  titleDescription: string
  content: string
  footercard: string
}

export function CardExperience({
  title,
  titleDescription,
  content,
  footercard,
}: CardExperienceProps) {
  return (
    <Container>
      <Card className="w-[320px] bg-slate-900 border-none hover:scale-105 transition-transform h-[420px] shadow shadow-sky-500">
        <CardHeader>
            <CardTitle className="text-center text-slate-300 tracking-tight text-2xl">{title}</CardTitle>
            <CardDescription className="text-center text-slate-500 leading-relaxed font-bold">{titleDescription}</CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-slate-500 leading-relaxed ">{content}</p>
        </CardContent>
        <CardFooter>
            <p className="text-slate-500 leading-relaxed font-bold">{footercard}</p>
        </CardFooter>
      </Card>
    </Container>
  )
}
