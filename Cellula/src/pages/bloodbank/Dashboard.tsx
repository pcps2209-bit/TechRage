import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Droplet, LogOut, Plus, Trash2, Dna, MapPin, Mail, Phone } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const BloodBankDashboard = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [donors, setDonors] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    province: "Bagmati",
    district: "Kathmandu",
    municipality: "",
    ward: "",
    street: "",
    bloodType: "O+",
    dob: "",
    medicalHistory: "",
    hlaA: "",
    hlaB: "",
    hlaC: "",
    hlaDRB1: "",
    hlaDQB1: "",
  });

  // Load donors from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("allDonors") || "[]");
    const bloodbankDonors = stored.filter((d: any) => d.addedBy === "bloodbank");
    setDonors(bloodbankDonors);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const generateDonorId = () => {
    return `CL-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
  };

  const handleAddDonor = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.age ||
      !formData.gender ||
      !formData.phone ||
      !formData.email ||
      !formData.municipality ||
      !formData.dob
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Phone validation
    if (formData.phone.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    const donorId = generateDonorId();
    const age = new Date().getFullYear() - new Date(formData.dob).getFullYear();

    const newDonor = {
      ...formData,
      id: donorId,
      age,
      registrationDate: new Date().toISOString(),
      status: "report_submitted",
      sampleStatus: "completed",
      sampleMethod: "Blood Bank Camp",
      location: `${formData.municipality}, ${formData.district}`,
      addedBy: "bloodbank",
      medicalReport: {
        medicalHistory: formData.medicalHistory,
        hlaA: formData.hlaA || "",
        hlaB: formData.hlaB || "",
        hlaC: formData.hlaC || "",
        hlaDRB1: formData.hlaDRB1 || "",
        hlaDQB1: formData.hlaDQB1 || "",
        hlaType: [formData.hlaA, formData.hlaB, formData.hlaC, formData.hlaDRB1, formData.hlaDQB1].filter(Boolean).join(", "),
        eligibility: "eligible",
        doctorNotes: "Registered via blood bank camp",
        submittedAt: new Date().toISOString(),
      },
    };

    // Add to localStorage
    const existing = JSON.parse(localStorage.getItem("allDonors") || "[]");
    existing.push(newDonor);
    localStorage.setItem("allDonors", JSON.stringify(existing));

    // Update local state
    setDonors([...donors, newDonor]);

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      phone: "",
      email: "",
      province: "Bagmati",
      district: "Kathmandu",
      municipality: "",
      ward: "",
      street: "",
      bloodType: "O+",
      dob: "",
      medicalHistory: "",
      hlaA: "",
      hlaB: "",
      hlaC: "",
      hlaDRB1: "",
      hlaDQB1: "",
    });

    alert("Donor added successfully!");
    setShowForm(false);
  };

  const handleDeleteDonor = (donorId: string) => {
    if (confirm("Are you sure you want to delete this donor?")) {
      const existing = JSON.parse(localStorage.getItem("allDonors") || "[]");
      const filtered = existing.filter((d: any) => d.id !== donorId);
      localStorage.setItem("allDonors", JSON.stringify(filtered));
      setDonors(donors.filter((d) => d.id !== donorId));
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.removeItem("bloodbankSession");
    navigate("/bloodbank/login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-red-50 via-white to-rose-50">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-red-200/50 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container max-w-7xl flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-rose-600">
              <Droplet className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                Blood Bank Portal
              </h1>
              <p className="text-xs text-gray-600">Donor Registration & Management</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={handleLogout} className="hover:bg-red-100">
              <LogOut className="h-5 w-5 text-red-600" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8">
        <div className="container max-w-6xl">
          {/* Stats & CTA */}
          <div className="mb-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 via-white to-rose-50">
              <CardContent className="py-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-bold text-red-600 mb-2">
                      {donors.length}
                    </div>
                    <p className="text-sm text-gray-600">
                      Donors registered from camps
                    </p>
                  </div>
                  <Button
                    onClick={() => setShowForm(!showForm)}
                    className="gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white shadow-lg"
                  >
                    <Plus className="h-4 w-4" />
                    Register New Donor
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Add Donor Form */}
          {showForm && (
            <Card className="mb-8 border-0 shadow-xl bg-white">
              <CardHeader className="bg-gradient-to-r from-red-50 to-rose-50 border-b border-red-100">
                <CardTitle className="text-red-700">Register New Donor</CardTitle>
                <CardDescription>Add donor information collected from your blood bank camp</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleAddDonor} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b-2 border-red-100">
                      <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-bold">👤</span>
                      </div>
                      <h3 className="font-semibold text-base text-gray-900">Personal Information</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-xs font-semibold text-gray-700">
                          First Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="First name"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="border-gray-200 focus:border-red-500 focus:ring-red-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-xs font-semibold text-gray-700">
                          Last Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Last name"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="border-gray-200 focus:border-red-500 focus:ring-red-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dob" className="text-xs font-semibold text-gray-700">
                          Date of Birth <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="dob"
                          type="date"
                          value={formData.dob}
                          onChange={(e) => handleInputChange("dob", e.target.value)}
                          className="border-gray-200 focus:border-red-500 focus:ring-red-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender" className="text-xs font-semibold text-gray-700">
                          Gender <span className="text-red-500">*</span>
                        </Label>
                        <Select value={formData.gender} onValueChange={(val) => handleInputChange("gender", val)}>
                          <SelectTrigger id="gender" className="border-gray-200 focus:border-red-500 focus:ring-red-500">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bloodType" className="text-xs font-semibold text-gray-700">
                          Blood Type <span className="text-red-500">*</span>
                        </Label>
                        <Select value={formData.bloodType} onValueChange={(val) => handleInputChange("bloodType", val)}>
                          <SelectTrigger id="bloodType" className="border-gray-200 focus:border-red-500 focus:ring-red-500">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="O+">O+</SelectItem>
                            <SelectItem value="O-">O-</SelectItem>
                            <SelectItem value="A+">A+</SelectItem>
                            <SelectItem value="A-">A-</SelectItem>
                            <SelectItem value="B+">B+</SelectItem>
                            <SelectItem value="B-">B-</SelectItem>
                            <SelectItem value="AB+">AB+</SelectItem>
                            <SelectItem value="AB-">AB-</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b-2 border-blue-100">
                      <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Phone className="h-4 w-4 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-base text-gray-900">Contact Information</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs font-semibold text-gray-700">
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="donor@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="border-gray-200 focus:border-red-500 focus:ring-red-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-xs font-semibold text-gray-700">
                          Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="phone"
                          placeholder="+977 984..."
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="border-gray-200 focus:border-red-500 focus:ring-red-500"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b-2 border-green-100">
                      <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-base text-gray-900">Address</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="province" className="text-xs font-semibold text-gray-700">
                          Province
                        </Label>
                        <Select value={formData.province} onValueChange={(val) => handleInputChange("province", val)}>
                          <SelectTrigger id="province" className="border-gray-200 focus:border-red-500 focus:ring-red-500">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Bagmati">Bagmati</SelectItem>
                            <SelectItem value="Gandaki">Gandaki</SelectItem>
                            <SelectItem value="Lumbini">Lumbini</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="district" className="text-xs font-semibold text-gray-700">
                          District
                        </Label>
                        <Select value={formData.district} onValueChange={(val) => handleInputChange("district", val)}>
                          <SelectTrigger id="district" className="border-gray-200 focus:border-red-500 focus:ring-red-500">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Kathmandu">Kathmandu</SelectItem>
                            <SelectItem value="Lalitpur">Lalitpur</SelectItem>
                            <SelectItem value="Bhaktapur">Bhaktapur</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="municipality" className="text-xs font-semibold text-gray-700">
                        Municipality / City <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="municipality"
                        placeholder="e.g., Kathmandu Sub-metropolis"
                        value={formData.municipality}
                        onChange={(e) => handleInputChange("municipality", e.target.value)}
                        className="border-gray-200 focus:border-red-500 focus:ring-red-500"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="ward" className="text-xs font-semibold text-gray-700">
                          Ward Number
                        </Label>
                        <Input
                          id="ward"
                          placeholder="e.g., 5"
                          value={formData.ward}
                          onChange={(e) => handleInputChange("ward", e.target.value)}
                          className="border-gray-200 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="street" className="text-xs font-semibold text-gray-700">
                          Street Address
                        </Label>
                        <Input
                          id="street"
                          placeholder="Street name"
                          value={formData.street}
                          onChange={(e) => handleInputChange("street", e.target.value)}
                          className="border-gray-200 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Medical & Lab Information */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b-2 border-purple-100">
                      <div className="h-8 w-8 rounded-lg bg-purple-100 flex items-center justify-center">
                        <Dna className="h-4 w-4 text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-base text-gray-900">Medical & HLA Information</h3>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                      <p className="text-xs text-purple-900 mb-4 font-medium">HLA Type (Human Leukocyte Antigen)</p>
                      <div className="grid grid-cols-5 gap-3">
                        <div className="space-y-2">
                          <Label htmlFor="hlaA" className="text-xs font-semibold text-gray-700">
                            HLA-A
                          </Label>
                          <Input
                            id="hlaA"
                            placeholder="e.g., A*02:01"
                            value={formData.hlaA}
                            onChange={(e) => handleInputChange("hlaA", e.target.value)}
                            className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="hlaB" className="text-xs font-semibold text-gray-700">
                            HLA-B
                          </Label>
                          <Input
                            id="hlaB"
                            placeholder="e.g., B*07:02"
                            value={formData.hlaB}
                            onChange={(e) => handleInputChange("hlaB", e.target.value)}
                            className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="hlaC" className="text-xs font-semibold text-gray-700">
                            HLA-C
                          </Label>
                          <Input
                            id="hlaC"
                            placeholder="e.g., C*07:02"
                            value={formData.hlaC}
                            onChange={(e) => handleInputChange("hlaC", e.target.value)}
                            className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="hlaDRB1" className="text-xs font-semibold text-gray-700">
                            HLA-DRB1
                          </Label>
                          <Input
                            id="hlaDRB1"
                            placeholder="e.g., DRB1*03:01"
                            value={formData.hlaDRB1}
                            onChange={(e) => handleInputChange("hlaDRB1", e.target.value)}
                            className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="hlaDQB1" className="text-xs font-semibold text-gray-700">
                            HLA-DQB1
                          </Label>
                          <Input
                            id="hlaDQB1"
                            placeholder="e.g., DQB1*02:01"
                            value={formData.hlaDQB1}
                            onChange={(e) => handleInputChange("hlaDQB1", e.target.value)}
                            className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="medicalHistory" className="text-xs font-semibold text-gray-700">
                        Medical History / Notes
                      </Label>
                      <Input
                        id="medicalHistory"
                        placeholder="Any relevant medical information or allergies"
                        value={formData.medicalHistory}
                        onChange={(e) => handleInputChange("medicalHistory", e.target.value)}
                        className="border-gray-200 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t">
                    <Button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white"
                    >
                      Register Donor
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowForm(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Donors List */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-gray-900">Registered Donors</CardTitle>
                  <CardDescription>All donors registered via blood bank camps</CardDescription>
                </div>
                <Badge variant="secondary" className="text-lg px-3 py-1 bg-red-100 text-red-700">
                  {donors.length}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              {donors.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Droplet className="h-12 w-12 mx-auto mb-3 opacity-20" />
                  <p className="font-medium mb-1">No donors registered yet</p>
                  <p className="text-sm">Click "Register New Donor" to get started</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50 hover:bg-gray-50">
                        <TableHead className="font-semibold">Donor ID</TableHead>
                        <TableHead className="font-semibold">Name</TableHead>
                        <TableHead className="font-semibold">Age</TableHead>
                        <TableHead className="font-semibold">Blood Type</TableHead>
                        <TableHead className="font-semibold">Contact</TableHead>
                        <TableHead className="font-semibold">Location</TableHead>
                        <TableHead className="font-semibold">HLA Type</TableHead>
                        <TableHead className="font-semibold text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {donors.map((donor) => (
                        <TableRow key={donor.id} className="hover:bg-gray-50">
                          <TableCell className="font-mono text-sm font-semibold text-red-600">
                            {donor.id}
                          </TableCell>
                          <TableCell className="font-medium">
                            {donor.firstName} {donor.lastName}
                          </TableCell>
                          <TableCell className="text-center">{donor.age}</TableCell>
                          <TableCell>
                            <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
                              {donor.bloodType}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-sm">
                            <div className="font-medium">{donor.email}</div>
                            <div className="text-xs text-gray-600">{donor.phone}</div>
                          </TableCell>
                          <TableCell className="text-sm text-gray-700">{donor.location}</TableCell>
                          <TableCell className="text-sm">
                            <div className="text-xs bg-purple-50 p-2 rounded border border-purple-100">
                              {donor.medicalReport?.hlaType && donor.medicalReport.hlaType !== "" ? (
                                <span className="font-mono text-purple-700">
                                  {donor.medicalReport.hlaType}
                                </span>
                              ) : (
                                <span className="text-gray-500">-</span>
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleDeleteDonor(donor.id)}
                              className="hover:bg-red-50 hover:text-red-600"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BloodBankDashboard;
