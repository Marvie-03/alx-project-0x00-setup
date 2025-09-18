import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Button title="Get Started" size="large" shape="rounded-full" className=" mt-3" />
      <Button title="Get Started" size="medium" shape="rounded-sm" className=" mt-3" />
      <Button title="Get Started" size="small" shape="rounded-md" className=" mt-3" />
      <Button title="Get Started" size="small"  className=" mt-3 rounded-lg" />

    </div>
  )
}
export default Landing