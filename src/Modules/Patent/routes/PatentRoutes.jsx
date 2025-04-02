import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Layout } from "../../../components/layout";

import ApplicantMainDashboard from "../components/Applicant/ApplicantMainDashboard";
import DirectorMainDashboard from "../components/Director/DirectorMainDashboard";
import PCCAdminMainDashboard from "../components/PCCAdmin/PCCAdminMainDashboard";

export default function PatentRoutes() {
  const role = useSelector((state) => state.user.role);

  return (
    <Routes>
      {/* Applicant Routes - Only for applicants */}
      {["student", "alumini", "Professor", "Associate Professor", "Assistant Professor", "Research Engineer"].includes(role) && (
        <Route
          path="/applicant/"
          element={
            <Layout>
              <ApplicantMainDashboard />
            </Layout>
          }
        />
      )}

      {/* Director Routes - Only for Director */}
      {role === "Director" && (
        <Route
          path="/director"
          element={
            <Layout>
              <DirectorMainDashboard />
            </Layout>
          }
        />
      )}

      {/* PCC Admin Routes - Only for PCC Admin */}
      {role === "PCC Admin" && (
        <Route
          path="/pccAdmin/"
          element={
            <Layout>
              <PCCAdminMainDashboard />
            </Layout>
          }
        />
      )}

      {/* Redirect users without access */}
      <Route path="*" element={<Navigate to="/unauthorized" replace />} />
    </Routes>
  );
}
