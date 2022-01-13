import React from "react";

function Routes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/EmailSent" element={<EmailSent />} />
      <Route exact path="*" element={<Notfounded />} />
    </Routes>
  );
}

export default Routes;
