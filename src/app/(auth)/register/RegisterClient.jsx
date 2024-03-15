"use client";
import Loader from "@/components/loader/Loader";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "../login/Auth.module.scss";
import Image from "next/image";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import Divider from "@/components/divider/Divider";
import Link from "next/link";

import LogoPath from "@/assets/colorful.svg";

const RegisterClient = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const registerUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image priority src={LogoPath} alt="logo" />
          </h1>

          <form onSubmit={registerUser} className={styles.form}>
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

            <Input
              password
              icon="lock"
              id="password"
              name="password"
              label="비밀번호 확인"
              placeholder="비밀번호 확인"
              className={styles.control}
              vlaue={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </form>

          <div className={styles.buttonGroup}>
            {/* Button */}
            <Button type="submit" width="100%">
              회원가입
            </Button>
            <Divider />
            <Button type="submit" width="100%" secondary>
              <Link href={"/login"}>로그인</Link>
            </Button>
            <Divider />
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterClient;
