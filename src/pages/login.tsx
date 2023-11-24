import AuthLayout from "@/components/Authentication/layouts/AuthLayout";
import CardLayout from "@/components/Authentication/layouts/CardLayout";
import LoginForm from "@/components/Authentication/LoginForm";

export default function Login() {
  return (
    <AuthLayout Title={<>
      Lo<span className="text-primary">gin</span>
    </>} imagePath="/assets/login_page.png">
      <CardLayout>
        <LoginForm />
        
        {/* <button
          type="submit"
          className="field-drop-shadow flex h-[45px] items-center justify-center gap-3 rounded-lg bg-white"
        >
          <FcGoogle size={25} /> Sign up with Google
        </button>
        <p className="text-center text-btnprimary">Other sign up methods</p>
        <div className="flex justify-center gap-5">
          <button className=" field-drop-shadow flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white">
            <Facebook size={25} fill="#3B5998" stroke="none" />
          </button>
          <button className=" field-drop-shadow flex h-[54px] w-[54px] items-center justify-center  rounded-full bg-white">
            <AiFillApple size={25} fill="black" stroke="none" />
          </button>
        </div> */}
      </CardLayout>
    </AuthLayout>
  );
}
