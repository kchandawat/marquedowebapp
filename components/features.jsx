import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Img,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { FaArrowRight, FaBiking, FaCheck, FaRupeeSign } from "react-icons/fa";
import { Feature } from "./feature";

export const Features = () => {
  return (
    <Box as="section">
      <Box
        maxW={{
          base: "xl",
          md: "7xl",
        }}
        mx="auto"
        px={{
          base: "6",
          md: "8",
        }}
      >
        <Stack
          spacing={{
            base: "4",
            lg: "20",
          }}
          direction={{
            base: "column",
            lg: "row",
          }}
        >
          <Center
            flex="1"
            shadow="lg"
            minH="26rem"
            maxW={{
              lg: "xl",
            }}
          >
            <Img
              objectFit="cover"
              w="full"
              h="full"
              htmlWidth="576px"
              htmlHeight="420px"
              src="/delivery1.png"
              alt="Delivery team"
            />
          </Center>
          <Box
            maxW={{
              lg: "lg",
            }}
          >
            <Heading
              size="3xl"
              mt="10"
              bgGradient="linear(to-l, brand.50, brand.500)"
              bgClip="text"
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="normal"
            >
              Get your own delivery team today
            </Heading>
            <Text fontSize="xl" mt="6" color="#fff" fontWeight="bold">
              Get items delivered to your customers, in just one click.
            </Text>
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
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
