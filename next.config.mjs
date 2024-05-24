/** @type {import('next').NextConfig} */
const nextConfig = {

    env: {
        EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
        EMAILJS_USER_ID: process.env.EMAILJS_USER_ID,
    },
};

export default nextConfig;
