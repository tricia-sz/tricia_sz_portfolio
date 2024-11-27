import { Container } from "@/app/components/container";
import { Input } from "@/app/components/input";
import Image from "next/image";
import imgContact from "@/app/sections/contact/img/global.svg"
import TitleThree from "@/app/components/titlethree";

export default function Contact() {
    return (
        <Container>
            <div className="mt-44 ">
                <TitleThree title="CONTACT" />
               <div className="flex justify-between items-center">
                    <div>
                          <Image src={imgContact} alt="contact image" className=" " />
                    </div>
                    <form className="flex flex-col mt-6">
                            <label className="mb-1 text-lg font-medium">Nome completo</label>
                            <Input
                            type="text"
                            name="name"
                            placeholder="Digite o nome completo"
                        />

                            <section className="flex gap-2 my-2 flex-col sm:flex-row">
                                <div className="flex-1">
                                <label className="mb-1 text-lg font-medium">Telefone</label>
                                <Input
                                    type="text"
                                    name="phone"
                                    placeholder="Exemplo (DD) 999101900"
                                />
                                </div>

                                <div className="flex-1">
                                <label className="mb-1 text-lg font-medium">Email</label>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Digite o email..."
                                />
                                </div>

                            </section>

                            <button
                                type="submit"
                                className="bg-blue-500 my-4 px-2 h-11 rounded text-white font-bold"
                            >
                                Cadastrar
                            </button>

                        </form>
                        
               </div>
            </div>
        </Container>
    )
}