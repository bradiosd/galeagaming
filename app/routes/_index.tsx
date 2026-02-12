import { type MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Galea Gaming - Join the Waitlist" },
    { name: "description", content: "Join the Galea Gaming waitlist and be the first to know when our new shop is live." },
  ];
};

export default function Index() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "6154f426-a671-4805-885d-8d637ef7d79b");
    formData.append("subject", "Waitlist Signup - Galea Gaming");
    formData.append("from_name", "Galea Gaming Waitlist");

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccess(true);
        form.reset();
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div className="page-container">
        <div className="waitlist-container">
          <div className="waitlist-box">
            <h1 className="waitlist-title">Join the Waitlist</h1>
            <p className="waitlist-description">
              Be notified first when our new shop is live
            </p>
            
            {showSuccess && (
              <div className="success-message">Thank you for joining our waitlist!</div>
            )}
            
            <form onSubmit={handleSubmit} className="waitlist-form">
              <input type="hidden" name="redirect" value="https://galeagaming.com" />
              <input type="hidden" name="to" value="support@galeagaming.com" />
              <Input
                type="email"
                name="email"
                required
                placeholder="Your email address"
                className="waitlist-input"
              />
              <Button type="submit" className="waitlist-button" disabled={isSubmitting}>
                {isSubmitting ? "Joining..." : "Join"}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
