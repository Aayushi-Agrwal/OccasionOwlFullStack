export default function SignupFlow() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl">Create your account</h1>
      <form>
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" className="bg-inherit" />
      </form>
    </div>
  );
}
