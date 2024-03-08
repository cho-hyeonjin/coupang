"use client";
import Image from "next/image";
import React, { useState } from "react";

// import LogoPath from "@/assets/chopang_logo.svg";
import LogoPath from "@/assets/logo.svg";
import { useRouter } from "next/navigation";

import styles from "./Auth.module.scss";
import Loader from "@/components/loader/Loader";
import Input from "@/components/input/Input";

const LoginClient = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const router = useRouter();

  const redirectUser = () => {
    router.push("/");
  };

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  const signInWithGoogle = () => {};

  return (
    <>
      <Loader />
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image priority src={LogoPath} alt="logo" />
          </h1>

          <form onSubmit={loginUser} className={styles.form}>
            {/* Input */}
            <Input
              email
              icon="letter"
              id="email"
              name="email"
              label="이메일"
              placeholder="아이디(이메일)"
              className={styles.control}
              vlaue={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              password
              icon="lock"
              id="password"
              name="password"
              label="비밀번호"
              placeholder="비밀번호"
              className={styles.control}
              vlaue={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.group}>
              {/* 자동 로그인, 비밀번호 수정 */}
              자동 로그인, 비밀번호 수정
            </div>
          </form>

          <div className={styles.buttonGroup}>
            {/* Button */}
            Button
            <div>
              {/* Button */}
              Button
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginClient;
