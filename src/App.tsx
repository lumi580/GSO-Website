import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Leadership from "@/pages/Leadership";
import Structure from "@/pages/Structure";
import Committees from "@/pages/Committees";
import Meetings from "@/pages/Meetings";
import Events from "@/pages/Events";
import Funding from "@/pages/Funding";
import Resources from "@/pages/Resources";
import Advocacy from "@/pages/Advocacy";
import Elections from "@/pages/Elections";
import GoverningDocuments from "@/pages/GoverningDocuments";
import Transparency from "@/pages/Transparency";
import News from "@/pages/News";
import Media from "@/pages/Media";
import GetInvolved from "@/pages/GetInvolved";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/structure" element={<Structure />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/events" element={<Events />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/advocacy" element={<Advocacy />} />
          <Route path="/elections" element={<Elections />} />
          <Route path="/governing-documents" element={<GoverningDocuments />} />
          <Route path="/transparency" element={<Transparency />} />
          <Route path="/news" element={<News />} />
          <Route path="/media" element={<Media />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
