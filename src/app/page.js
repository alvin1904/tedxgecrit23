import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import Speakers from "@/components/Speakers";
import Highlights from "@/components/Highlights";
import MeetUs from "@/components/MeetUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import AboutTheme from "@/components/AboutTheme";
import AboutUs from "@/components/AboutUs";
import Tickets from "@/components/Tickets";
import Performer from "@/components/Performer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <LandingPage />
      <AboutTheme />
      <Speakers />
      <Performer />
      <Tickets />
      <AboutUs />
      <Highlights />
      <MeetUs />
      <ContactUs />
      <Footer />
    </main>
  );
}
