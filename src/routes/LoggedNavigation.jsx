import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoggedLayout } from "../Layouts";
import { Home, Artists, Artist, Albums, Album, Profile } from "../Pages";

export function LoggedNavigation() {
  return (
    <BrowserRouter>
      <LoggedLayout>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/:id" element={<Artist />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/albums/:id" element={<Album />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </LoggedLayout>
    </BrowserRouter>
  );
}
