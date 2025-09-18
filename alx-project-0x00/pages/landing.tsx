import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Button title="Get Started" size="large" shape="rounded-full" styles=" mt-3" />
      <Button title="Get Started" size="medium" shape="rounded-sm" styles=" mt-3" />
      <Button title="Get Started" size="small" shape="rounded-md" styles=" mt-3" />
      <Button title="Get Started" size="small"  styles=" mt-3 rounded-lg" />

    </div>
  )
}
export default Landing