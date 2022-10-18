import { Envelope, Lock } from "phosphor-react";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../Logo";
import { Button } from "../components/Button";
import { CheckBox } from "../components/CheckBox";

export function SingIn(){
    return(<div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col  items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-300 mt-1">Faça seu login e comece a usar!</Text>
      </header>
      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="font-semibold flex flex-col gap-3">
          <Text>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="font-semibold flex flex-col gap-3">
          <Text>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="password" id="password" placeholder="********" />
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className="flex items-center gap-2">
          <CheckBox id="remember"/>
          <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit" className="mt-4">Entrar na plaforma</Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-200">Esqueceu a sua senha</a>
        </Text>
        <Text asChild size="sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>)
}