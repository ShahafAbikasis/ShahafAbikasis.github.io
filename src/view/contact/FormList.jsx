import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text, Textarea, useToast } from "@chakra-ui/react";
import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import validationYup from "../../config/yupValidation";
import { colors } from "../../themes/colors";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";



export default function FormList() {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [messageSent, setMessageSent] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false);
    const [error, setError] = useState(null)
    const [content, setContent] = useState("");
    const characterLimit = 500;


    const form = useRef()
    const toastIdRef = useRef()
    const toastIdErrorRef = useRef()
    const toast = useToast()

    function toastSuccsess() {
        toastIdRef.current = toast({
            description: 'some text', position: 'top-center', render: () => (
                <Box w='280px' paddingX='3rem' border='1px' borderColor={colors.activeNav} borderBottomRightRadius='1rem' borderTopLeftRadius='1rem' marginTop="10rem" textAlign="center" padding='2rem' bgColor='#fbfbfbb3'  >
                    <Heading fontWeight={400} color='#707070' fontSize="18px" as="h3">
                        תודה לך על ההודעה שלך
                    </Heading>
                    <Text color='#707070' fontSize="16px">
                        אני אחזור אליך בקרוב
                    </Text>
                </Box>
            ),
        })
    }

    function toastError() {
        toastIdErrorRef.current = toast({
            description: 'some text', position: 'top-center', render: () => (
                <Box borderBottomRightRadius='1rem' borderTopLeftRadius='1rem' w='280px' marginTop="10rem" textAlign="center" p={3} bg='#ae010161' >
                    <Heading fontWeight={400} fontSize="18px" as="h3">Something went Wrong</Heading>
                    <Text fontWeight={300} fontSize="16px">Please select another form of contact or try again later</Text>
                </Box>
            ),
        })
    }


    const handleLimitChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setContent(event.target.value);
            setIsDisabled(false);
        } else if (characterLimit - event.target.value.length <= 0) {
            setIsDisabled(true);
        }
    };

    const sendEmail = (resetForm) => {
        // e.preventDefault();
        emailjs.sendForm('service_9u6pfgl', 'template_hw3ue0r', form.current, '9hZhnD27nS6otXM7e')
            .then((result) => {
                setError(false)
                toastSuccsess()
                resetForm({ values: "" });
                setContent("");
                setMessageSent(true)
                setIsSubmitting(false);
                setMessageSent(false)
                setIsDisabled(false)

            }, (error) => {
                setError(true)
                console.log(error.text);
                setIsSubmitting(false);
                toastError()
            });
    };


    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        },

        onSubmit: (values, { resetForm }) => {
            setIsSubmitting(true);
            sendEmail(resetForm)
        }
    }
    );

    return (
        <form ref={form} onSubmit={formik.handleSubmit}>
            <Flex marginBottom='2rem' w='100%' justifyContent='center' align='center' flexDir='column'>
                <Flex flexDir='column' justifyContent='center' align='center' w={['100%', '90%', '80%', '63%']}>

                    <Flex w='80%' flexDir='column'>

                        <Flex paddingBottom={['10px', '10px', '8px', '5px']} flexDir='row-reverse' gap={1} align='center' textAlign='center'>
                            <Text fontWeight={300} fontSize='16px'>שם</Text>
                            <Text fontSize='12px'>(נדרש)</Text>
                        </Flex>
                    </Flex>
                    <Flex marginBottom={['3rem', '10px', '10px', '10px']} gap={['0', '2rem', '2rem', '2rem']} flexDir={['column', 'row', 'row', 'row']} w='80%' justifyContent='space-between'>

                        <Flex w='100%' marginBottom={['3rem', '10px', '10px', '10px']}>
                            <FormControl
                                isRequired
                                isInvalid={
                                    formik.errors.firstName && formik.touched.firstName
                                }
                            >
                                <FormLabel paddingBottom={['5px', '5px', '5px', '5px']} display='flex' flexDir='row-reverse'
                                    // paddingTop={["0px", "0px", "7px", "7px"]}
                                    marginBottom='0'
                                    color="#1f1f1f"
                                    fontWeight={300}
                                    fontSize='12px'
                                >
                                    שם פרטי                                </FormLabel>
                                <Input
                                    dir="rtl"
                                    _invalid={{ border: "2px solid #a90909" }}
                                    autoComplete="off"
                                    onChange={formik.handleChange}
                                    value={formik.values.firstName}
                                    color="#575555"
                                    fontSize={["15px", "15px", "20px", "20px"]}
                                    id="firstName"
                                    name="firstName"
                                    w='100%'                                    // w={["300px", "318px", "350px", "425px"]}
                                    h={["40px", "40px", "60px", "60px"]}
                                    paddingLeft="17px"
                                    borderRadius='2px'
                                    bgColor='#fafafa'
                                    border="1px solid #a9a9a9"
                                />

                            </FormControl>
                        </Flex>
                        <Flex w='100%' marginBottom='10px'>
                            <FormControl
                                isRequired

                            >
                                <FormLabel paddingBottom={['5px', '5px', '5px', '5px']} display='flex' flexDir='row-reverse'
                                    marginBottom='0'
                                    color="#1f1f1f"
                                    fontWeight={300}
                                    fontSize='12px'
                                >
                                    שם משפחה
                                </FormLabel>
                                <Input
                                    dir="rtl"
                                    color="#575555"
                                    fontSize={["15px", "15px", "20px", "20px"]}
                                    id="lastName"
                                    name="lastName"
                                    _invalid={{ border: "2px solid #a90909" }}
                                    autoComplete="off"
                                    onChange={formik.handleChange}
                                    value={formik.values.lastName}
                                    w='100%'
                                    // w={["300px", "318px", "350px", "425px"]}
                                    h={["40px", "40px", "60px", "60px"]}
                                    paddingLeft="17px"
                                    borderRadius='2px'
                                    bgColor='#fafafa'
                                    border="1px solid #a9a9a9"
                                />
                            </FormControl>
                        </Flex>
                    </Flex>
                    <Flex marginBottom={['3rem', '10px', '10px', '10px']} w='80%'>
                        <Flex w='100%'>
                            <FormControl isRequired>
                                <Flex paddingBottom={['10px', '10px', '8px', '5px']} flexDir='row-reverse' gap={1} align='center' textAlign='center'>
                                    <Text fontWeight={300} fontSize='16px'>כתובת דוא"ל</Text>
                                    <Text fontSize='12px'>(נדרש)</Text>
                                </Flex>
                                <Input dir="rtl" w='100%'
                                    color="#575555"
                                    fontSize={["15px", "15px", "20px", "20px"]}
                                    id="email"
                                    name="email"
                                    autoComplete="off"
                                    type='email'
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    h={["40px", "40px", "60px", "60px"]}
                                    paddingLeft="17px"
                                    borderRadius='2px'
                                    bgColor='#fafafa'
                                    border="1px solid #a9a9a9"
                                />
                            </FormControl>
                        </Flex>
                    </Flex >
                    <Flex marginBottom={['3rem', '10px', '10px', '10px']} w='80%'>
                        <Flex w='100%'>
                            <FormControl
                                isInvalid={
                                    formik.errors.subject && formik.touched.subject
                                }
                            >
                                <Flex paddingBottom={['10px', '10px', '8px', '5px']} flexDir='row-reverse' gap={1} align='center' textAlign='center'>
                                    <Text fontWeight={300} fontSize='16px'>נושא </Text>
                                </Flex>
                                <Input dir="rtl" w='100%'
                                    color="#575555"
                                    fontSize={["15px", "15px", "20px", "20px"]}
                                    id="subject"
                                    name="subject" autoComplete="off"
                                    onChange={formik.handleChange}
                                    value={formik.values.subject}
                                    h={["40px", "40px", "60px", "60px"]}
                                    paddingLeft="17px"
                                    borderRadius='2px'
                                    bgColor='#fafafa'
                                    border="1px solid #a9a9a9"
                                />
                            </FormControl>
                        </Flex>
                    </Flex>
                    <Flex w='80%'>
                        <Flex w='100%'>
                            <FormControl
                                isRequired
                                isInvalid={
                                    formik.errors.message && formik.touched.message
                                }
                            >
                                <Flex paddingBottom={['10px', '10px', '8px', '5px']} flexDir='row-reverse' gap={1} align='center' textAlign='center'>
                                    <Text fontWeight={300} fontSize='16px'>הודעה</Text>
                                    <Text fontSize='12px'>(נדרש)</Text>
                                </Flex>
                                <Textarea dir="rtl" w='100%'
                                    color="#575555"
                                    fontSize={["15px", "15px", "20px", "20px"]}
                                    id="message"
                                    name="message" autoComplete="off"
                                    onChange={formik.handleChange}
                                    value={formik.values.message} minH='100px'
                                    resize='none'
                                    paddingLeft="17px"
                                    borderRadius='2px'
                                    bgColor='#fafafa'
                                    border="1px solid #a9a9a9"
                                />
                            </FormControl>
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>
            <Flex marginBottom='8rem' w='100%' justifyContent='center' >


                <Flex w={['80%', '72%', '64%', '50.5%']}>
                    <Button isLoading={isSubmitting}
                        loadingText='Loading' colorScheme='#a81010'
                        variant='outline' spinnerPlacement='end'
                        padding='1em 2.5em' fontSize='16px' fontWeight={300} borderRadius='0' color={colors.white} bgColor='#a81010' type="submit">Submit</Button>
                </Flex>
            </Flex>
        </form >
    );




}