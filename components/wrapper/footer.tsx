"use client"
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import { Textarea } from "@/components/ui/textarea"
 

export default function Footer() {
  


     
    return (
        <footer className="border-t dark:bg-black">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2">
                    <div
                        className="border-b   py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16"
                    >
                        <div className="mt-8 space-y-4 lg:mt-0">

                            <div>
                                <h3 className="text-2xl font-medium">Reach out for any questions!</h3>
                                <p className="mt-4 max-w-lg  ">
                                   
                                </p>
                            </div>
                            <form
                           
                            className="flex flex-col border rounded-xl p-4 gap-3 mt-6 w-full"
                                  action={async (formData) => {
                                    const {  error } = await sendEmail(formData);
                                     
                                    if (error) {
                                      toast.error(error);
                                      return;
                                    }
                          
                                    toast.success("Email sent successfully!");
                                              // Clear form fields and reCAPTCHA value
                                    

                                  }}
                            >
                                <Input
                                    name="senderEmail"
                                    placeholder="Enter your email"
                                    type="email"
                                    required
                                />
                                  <Textarea 
                                  name="message"
                                  required
                                  maxLength={5000}
                                  placeholder="Type your message here." />
                                <Button type="submit">
                                   Send Message
                                </Button>
                            </form>
                        </div>
                    </div>

                    <div className="py-8 lg:py-16 lg:pe-16">


                        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">

                            <div>
                                <p className="font-medium ">Socials</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a href="https://twitter.com/rasmickyy" target="_blank" className="transition hover:opacity-75"> Twitter </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/@rasmic" target="_blank" className="  transition hover:opacity-75"> YouTube </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-medium ">Helpful Links</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a target="_blank" href="/" rel="noopener noreferrer" className="  transition hover:opacity-75"> Docs </a>
                                    </li>
                                    <li>
                                        <a href="/" className="  transition hover:opacity-75"> Methodology </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 border-t   pt-8">
                            <ul className="flex flex-wrap gap-4 text-xs">
                                <li>
                                    <a href="/" target="_blank" className="transition hover:opacity-75">Terms & Conditions </a>
                                </li>

                                <li>
                                    <a href="/" target="_blank" className="transition hover:opacity-75">Privacy Policy </a>
                                </li>
                            </ul>

                            <p className="mt-8 text-xs  ">&copy; 2024. SomeCompany LLC. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
