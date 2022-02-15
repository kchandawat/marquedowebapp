import {
  Box,
  Button,
  ButtonGroup,
  CloseButton,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  IconButton,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";

import { Features } from "../components/features";

import {
  FaArrowRight,
  FaBiking,
  FaCheck,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRupeeSign,
  FaStore,
  FaWhatsapp,
} from "react-icons/fa";
import Feature from "../components/feature";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { BannerLink } from "../components/BannerLink";

export default function marquedo() {
  const [visible, setVisible] = useState(true);
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });
  return (
    <Flex flexDirection="column" backgroundColor="#230C0F" h="100%">
      <Box as="section" display={visible ? "-moz-initial" : "none"}>
        <Stack
          direction={{
            base: "column",
            sm: "row",
          }}
          justifyContent="center"
          alignItems="center"
          py="3"
          px={{
            base: "3",
            md: "6",
            lg: "8",
          }}
          color="white"
          bg="brand.500"
        >
          <HStack spacing="3">
            <Icon as={FaStore} fontSize="2xl" h="10" />
            <Text fontWeight="medium" marginEnd="2">
              <b> Hurry up!</b> Early subscribers get their own E-Store
              worth&nbsp;
              <b>₹30,000</b>&nbsp; included.
            </Text>
          </HStack>
          <BannerLink
            w={{
              base: "full",
              sm: "auto",
            }}
            flexShrink={0}
          >
            Get started
          </BannerLink>
          <CloseButton onClick={() => setVisible(false)} />
        </Stack>
      </Box>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />

        <title>Marquedo</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {/* Nav */}
      <Flex as="nav" p={5}>
        <Image src="/logo.svg" width={300} height={80} />
        <Text textColor="white" ml={-5} mt={2}>
          &trade;
        </Text>
      </Flex>
      {/* Head */}
      <Features />

      {/* Why Marquedo */}
      <Flex w="100%" px={30} flexDir="column">
        <Divider my="15" opacity={1} borderColor="#1d1d1d" />
        <Flex w="100%" flexDir="column">
          {/* Rakesh */}
          <Flex justify="left">
            <Flex align="center">
              <Image
                src="/rakesh.png"
                width={400}
                height={360}
                loading="eager"
              />
              <Heading
                color="#fff"
                fontWeight="bold"
                letterSpacing="tight"
                fontSize={["2xl", "2xl", "3xl", "4xl", "5xl"]}
                maxW="lg"
              >
                He is Rakesh. <br />
                Businessman in Bangalore
              </Heading>
            </Flex>
          </Flex>

          {/* Auto spare parts */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <Flex justify="right">
              <Flex align="center">
                <Heading
                  color="#fff"
                  fontWeight="bold"
                  letterSpacing="tight"
                  fontSize={["xl", "2xl", "3xl", "4xl", "5xl"]}
                  maxW="lg"
                >
                  He has an auto parts shop with regular customers.
                </Heading>
                <Image
                  src="/shpkeeper.png"
                  width={400}
                  height={400}
                  loading="eager"
                />
              </Flex>
            </Flex>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <Flex w="100%" justify="left">
              {/* Not Enough*/}
              <Flex align="center">
                <Image src="/problem.png" width={300} height={300} />
                <Heading
                  color="#fff"
                  fontWeight="bold"
                  letterSpacing="tight"
                  fontSize={["2xl", "2xl", "3xl", "4xl", "5xl"]}
                  maxW="lg"
                >
                  But that&apos;s not enough!
                </Heading>
              </Flex>
            </Flex>
          </motion.div>
          {/* Customer Inflow */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <Flex justify="right">
              <Flex align="center">
                <Heading
                  color="#fff"
                  fontWeight="bold"
                  letterSpacing="tight"
                  fontSize={["xl", "2xl", "3xl", "4xl", "5xl"]}
                  maxW="lg"
                >
                  He requires a greater customer reach to scale his business.
                </Heading>
                <Image src="/customer.png" width={400} height={400} />
              </Flex>
            </Flex>
          </motion.div>

          {/* Go Online */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <Flex align="left">
              <Flex align="center">
                <Image src="/web.png" width={320} height={270} />
                <Heading
                  color="#fff"
                  fontWeight="bold"
                  letterSpacing="tight"
                  fontSize={["xl", "2xl", "3xl", "4xl", "5xl"]}
                  maxW="lg"
                >
                  The best way to get more customers is to go online.
                </Heading>
              </Flex>
            </Flex>
          </motion.div>
        </Flex>
        <Divider my="10" opacity={1} borderColor="#1d1d1d" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: "-100%" },
          }}
        >
          <Flex flexDir="column" align="center">
            <Flex
              justify="center"
              mt={15}
              display={{ base: "none", md: "flex", lg: "flex", xl: "flex" }}
            >
              <Image src="/tension.png" width={1370} height={606} />
            </Flex>
            <Flex
              justify="center"
              mt={15}
              display={{ base: "flex", md: "none", lg: "none", xl: "none" }}
            >
              <Image src="/tension-mobile.png" width={740} height={913} />
            </Flex>
          </Flex>
        </motion.div>
        <Divider my="10" opacity={1} borderColor="#1d1d1d" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: "-100%" },
          }}
        >
          <Flex flexDir="column" align="center">
            <Flex justify="center" align="center" mt={15}>
              <Image src="/idea.png" width={500} height={450} />
              <Flex flexDir="column">
                <Heading
                  size="3xl"
                  bgGradient="linear(to-l, brand.500, brand.200)"
                  bgClip="text"
                  fontWeight="extrabold"
                  letterSpacing="tight"
                  lineHeight="normal"
                >
                  Solution
                </Heading>
                <Heading
                  color="#fff"
                  fontWeight="bold"
                  maxW="lg"
                  letterSpacing="tight"
                  fontSize={["xl", "2xl", "3xl", "4xl", "5xl"]}
                >
                  Marquedo will take care of all the fuss.
                </Heading>
              </Flex>
            </Flex>
          </Flex>
        </motion.div>
        <Divider my="10" opacity={1} borderColor="#1d1d1d" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: "-100%" },
          }}
        >
          <Flex align="center" textAlign="center" flexDir="column">
            <Heading
              size="3xl"
              bgGradient="linear(to-l, brand.500, brand.200)"
              bgClip="text"
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="normal"
              mb={5}
            >
              We will look after your:
            </Heading>
            <Flex
              w="100%"
              flexDir={{ base: "column", md: "column", lg: "row", xl: "row" }}
            >
              <Flex
                align="center"
                w="100%"
                display={{ base: "flex", md: "flex", lg: "none", xl: "none" }}
              >
                <Image src="/mockup.png" width={900} height={550} />
              </Flex>
              <Flex w="100%" justify="center">
                <Grid
                  templateRows="repeat(2, 1fr)"
                  templateColumns="repeat(2, 1fr)"
                  gap={4}
                >
                  <GridItem
                    flexDir="column"
                    textAlign="center"
                    alignItems="center"
                  >
                    <Image src="/web.png" width={200} height={150} />

                    <Heading
                      color="#fff"
                      fontWeight="bold"
                      letterSpacing="tight"
                      fontSize={["xl", "xl", "2xl", "3xl", "3xl"]}
                    >
                      Website
                    </Heading>
                  </GridItem>
                  <GridItem
                    flexDir="column"
                    textAlign="center"
                    alignItems="center"
                  >
                    <Image src="/support.png" width={210} height={150} />
                    <Heading
                      color="#fff"
                      fontWeight="bold"
                      letterSpacing="tight"
                      fontSize={["xl", "xl", "2xl", "3xl", "3xl"]}
                    >
                      Tech Support
                    </Heading>
                  </GridItem>

                  <GridItem
                    flexDir="column"
                    textAlign="center"
                    alignItems="center"
                  >
                    <Image src="/scooter.png" width={200} height={150} />
                    <Heading
                      color="#fff"
                      fontWeight="bold"
                      letterSpacing="tight"
                      fontSize={["xl", "xl", "2xl", "3xl", "3xl"]}
                    >
                      Delivery Service
                    </Heading>
                  </GridItem>

                  <GridItem
                    flexDir="column"
                    textAlign="center"
                    alignItems="center"
                  >
                    <Image src="/cart.png" width={215} height={150} />
                    <Heading
                      color="#fff"
                      fontWeight="bold"
                      letterSpacing="tight"
                      fontSize={["xl", "xl", "2xl", "3xl", "3xl"]}
                    >
                      Marketplace Insights
                    </Heading>
                  </GridItem>
                </Grid>
              </Flex>

              <Flex
                align="center"
                justify="center"
                w="100%"
                display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
              >
                <Image src="/mockup.png" width={1150} height={700} />
              </Flex>
            </Flex>
          </Flex>
        </motion.div>
        <Divider my="10" opacity={1} borderColor="#1d1d1d" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: "-100%" },
          }}
        >
          <Flex textAlign="center" flexDir="column">
            <Heading
              size="3xl"
              bgGradient="linear(to-l, brand.500, brand.200)"
              bgClip="text"
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="normal"
            >
              Benefits:
            </Heading>
            <Flex
              w="100%"
              flexDir={{ base: "column", md: "column", lg: "row", xl: "row" }}
            >
              <Flex h="100%" justify="center" w="100%">
                <Image src="/mockup-mobile.png" width={450} height={900} />
              </Flex>
              <Flex w="100%" justify="center">
                <Grid
                  templateRows="repeat(3, 1fr)"
                  templateColumns="repeat(2, 1fr)"
                  gap={4}
                >
                  <GridItem
                    flexDir="column"
                    textAlign="center"
                    alignItems="center"
                  >
                    <Image src="/truck.png" width={200} height={150} />
                    <Heading
                      fontWeight="bold"
                      letterSpacing="tight"
                      fontSize={["xl", "xl", "2xl", "3xl", "3xl"]}
                      color="#ff5757"
                    >
                      Personal Delivery partner
                    </Heading>
                  </GridItem>
                  <GridItem
                    flexDir="column"
                    textAlign="center"
                    alignItems="center"
                  >
                    <Image src="/lowcost.png" width={200} height={150} />
                    <Heading
                      fontWeight="bold"
                      letterSpacing="tight"
                      fontSize={["xl", "xl", "2xl", "3xl", "3xl"]}
                      color="#ff5757"
                    >
                      Low commissions/
                      <br />
                      Pay as you go
                    </Heading>
                  </GridItem>

                  <GridItem
                    flexDir="column"
                    textAlign="center"
                    alignItems="center"
                  >
                    <Image src="/ecosystem.png" width={200} height={150} />
                    <Heading
                      fontWeight="bold"
                      letterSpacing="tight"
                      fontSize={["xl", "xl", "2xl", "3xl", "3xl"]}
                      color="#ff5757"
                    >
                      An ecosystem of business productivity tools
                    </Heading>
                  </GridItem>

                  <GridItem
                    flexDir="column"
                    textAlign="center"
                    alignItems="center"
                  >
                    <Image src="/money.png" width={200} height={150} />
                    <Heading
                      color="#fff"
                      fontWeight="bold"
                      letterSpacing="tight"
                      fontSize={["xl", "xl", "2xl", "3xl", "3xl"]}
                    >
                      Digital Payments
                    </Heading>
                  </GridItem>

                  <GridItem textAlign="center" alignItems="center">
                    <Image src="/cart-full.png" width={200} height={150} />
                    <Heading
                      color="#fff"
                      fontWeight="bold"
                      letterSpacing="tight"
                      fontSize={["xl", "xl", "2xl", "3xl", "3xl"]}
                    >
                      E-Inventory Management
                    </Heading>
                  </GridItem>

                  <GridItem textAlign="center" alignItems="center">
                    <Image src="/comments.png" width={200} height={150} />
                    <Heading
                      color="#fff"
                      fontWeight="bold"
                      letterSpacing="tight"
                      fontSize={["xl", "xl", "2xl", "3xl", "3xl"]}
                    >
                      Customer Testimony Management
                    </Heading>
                  </GridItem>
                </Grid>
              </Flex>
            </Flex>
          </Flex>
        </motion.div>
        <Divider mt={10} opacity={1} borderColor="#1d1d1d" />
        <Flex justify="center" mt={10}>
          <SimpleGrid
            columns={{
              base: 1,
              md: 4,
            }}
            spacing={{
              base: "12",
              md: "8",
            }}
          >
            <Feature title="Why Marquedo" icon={<FaCheck />}>
              Rupees 1 Lakh plus worth free deliveries already done.
            </Feature>

            <Feature title="Competitive Pricing" icon={<FaRupeeSign />}>
              Starting from just ₹35
            </Feature>
            <Feature title="Hassle Free" icon={<FaBiking />}>
              Pay as you go
            </Feature>
            <Feature title="E-Store Worth ₹30000" icon={<FaStore />}>
              Hurry up! Early subscribers get their own E-store worth ₹30,000
              included.
            </Feature>
          </SimpleGrid>
        </Flex>
        <Divider mt={10} opacity={1} borderColor="#1d1d1d" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <Flex
            w="100%"
            flexDir={{ base: "column", md: "column", lg: "row", xl: "row" }}
          >
            <Flex justify="center" w="100%">
              <Image
                src="/delivery2.png"
                height={444}
                width={500}
                loading="eager"
              />
            </Flex>
            <Flex w="100%" mt={{ lg: 110, xl: 110 }} justify="center">
              <Flex
                flexDir="column"
                textAlign={{
                  base: "center",
                  md: "center",
                  lg: "left",
                  xl: "left",
                }}
                maxW={{
                  lg: "lg",
                }}
              >
                <Heading
                  textColor="white"
                  fontWeight="bold"
                  letterSpacing="tight"
                  fontSize={["xl", "4xl", "4xl", "4xl", "5xl"]}
                >
                  Get items delivered to your customer in one click
                </Heading>

                <Text
                  color="#ffc609"
                  fontWeight="bold"
                  fontSize={["lg", "2xl", "3xl", "3xl", "3xl"]}
                >
                  Get your own delivery team
                </Text>
                <Flex
                  justify={{
                    base: "center",
                    md: "center",
                    lg: "left",
                    xl: "left",
                  }}
                >
                  <Link
                    style={{ textDecoration: "none" }}
                    href="https://wa.me/917760168711?text=Hi!%20There%0AI%20was%20scrolling%20through%20your%20website%20and%20found%20your%20product%20interesting%20can%20you%20tell%20me%20more%20about%20it%3F"
                  >
                    <Button
                      className="group"
                      mt="8"
                      colorScheme="brand"
                      size="lg"
                      px="8"
                      fontWeight="bold"
                      h="14"
                      iconSpacing="3"
                      rightIcon={
                        <Box
                          as={FaArrowRight}
                          fontSize="sm"
                          transition="transform 0.2s"
                          _groupHover={{
                            transform: "translateX(2px)",
                          }}
                        />
                      }
                    >
                      Get Started
                    </Button>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </motion.div>
      </Flex>

      <Box
        as="footer"
        role="contentinfo"
        mx="auto"
        maxW="100%"
        bgGradient="linear(to-b, #230C0F, brown)"
        w="100%"
        py="5"
        px={{ base: "4", md: "8" }}
      >
        <Stack>
          <Stack
            direction="row"
            spacing="4"
            align="center"
            justify="space-between"
          >
            <Flex>
              <Image src="/logo.svg" width={300} height={80} />
              <Text textColor="white" ml={-2} mt={1}>
                &trade;
              </Text>
            </Flex>
            <ButtonGroup variant="ghost" color="whiteAlpha.900">
              <IconButton
                as="a"
                href="https://www.linkedin.com/company/marquedo/"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="20px" />}
              />
              <IconButton
                as="a"
                href="https://www.instagram.com/marquedo_"
                aria-label="Instagram"
                icon={<FaInstagram fontSize="20px" />}
              />
              <IconButton
                as="a"
                href="https://www.facebook.com/marquedo/"
                aria-label="Facebook"
                icon={<FaFacebook fontSize="20px" />}
              />

              <IconButton
                as="a"
                href="https://wa.me/917760168711?text=Hi"
                aria-label="Whatsapp"
                icon={<FaWhatsapp fontSize="20px" />}
              />
            </ButtonGroup>
          </Stack>
          <Text fontSize="sm" color="#fff" pl={4}>
            &copy; 2022 Marquedo, Inc. All rights reserved.
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
}
