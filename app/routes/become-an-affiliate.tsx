import { type MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Checkbox } from "~/components/ui/checkbox";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Become an Affiliate - Galea Gaming" },
    { name: "description", content: "Join the Galea Gaming affiliate program and earn rewards by promoting our brand." },
  ];
};

export default function BecomeAnAffiliate() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [socialMedia, setSocialMedia] = useState({
    instagram: false,
    facebook: false,
    tiktok: false,
    youtube: false,
  });

  const handleSocialMediaChange = (platform: keyof typeof socialMedia) => {
    setSocialMedia((prev) => ({
      ...prev,
      [platform]: !prev[platform],
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "53b5e791-e6d4-4834-823c-a31406345d91");
    formData.append("subject", "Affiliate Application - Galea Gaming");
    formData.append("from_name", "Galea Gaming Affiliates");

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
        setSocialMedia({
          instagram: false,
          facebook: false,
          tiktok: false,
          youtube: false,
        });
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
        <div className="container">
          <div className="section">
            <h1 className="page-title">Become an Affiliate</h1>
            <p className="page-description">
              Join our affiliate program and earn rewards by promoting Galea Gaming products.
            </p>
            
            {showSuccess && (
              <div className="success-message">Thank you for your affiliate application! We'll review it and get back to you soon.</div>
            )}
            
            {!showSuccess && (
              <form onSubmit={handleSubmit} className="affiliate-form">
                <input type="hidden" name="redirect" value="https://galeagaming.com/become-an-affiliate" />
                <input type="hidden" name="to" value="support@galeagaming.com" />
              
              <div className="form-group">
                <Label htmlFor="affiliate-email">Email Address *</Label>
                <Input
                  type="email"
                  id="affiliate-email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="mt-2"
                />
              </div>

              <div className="form-group">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="mt-2"
                />
              </div>

              <div className="form-group">
                <Label htmlFor="influencer-name">Influencer/Channel Name *</Label>
                <Input
                  type="text"
                  id="influencer-name"
                  name="influencerName"
                  required
                  placeholder="Your channel or influencer name"
                  className="mt-2"
                />
              </div>

              <div className="form-group">
                <Label>Social Media Accounts *</Label>
                <div className="checkbox-group">
                  <div className="checkbox-item">
                    <Checkbox
                      id="instagram"
                      name="instagram"
                      onCheckedChange={() => handleSocialMediaChange("instagram")}
                    />
                    <Label htmlFor="instagram" className="cursor-pointer">Instagram</Label>
                  </div>
                  <div className="checkbox-item">
                    <Checkbox
                      id="facebook"
                      name="facebook"
                      onCheckedChange={() => handleSocialMediaChange("facebook")}
                    />
                    <Label htmlFor="facebook" className="cursor-pointer">Facebook</Label>
                  </div>
                  <div className="checkbox-item">
                    <Checkbox
                      id="tiktok"
                      name="tiktok"
                      onCheckedChange={() => handleSocialMediaChange("tiktok")}
                    />
                    <Label htmlFor="tiktok" className="cursor-pointer">TikTok</Label>
                  </div>
                  <div className="checkbox-item">
                    <Checkbox
                      id="youtube"
                      name="youtube"
                      onCheckedChange={() => handleSocialMediaChange("youtube")}
                    />
                    <Label htmlFor="youtube" className="cursor-pointer">YouTube</Label>
                  </div>
                </div>
              </div>

              {/* Instagram Fields */}
              {socialMedia.instagram && (
                <div className="conditional-fields">
                  <h3>Instagram Details</h3>
                  <div className="form-group">
                    <Label htmlFor="instagram-handle">Instagram Handle *</Label>
                    <Input
                      type="text"
                      id="instagram-handle"
                      name="instagramHandle"
                      required
                      placeholder="@yourhandle"
                      className="mt-2"
                    />
                  </div>
                  <div className="form-group">
                    <Label htmlFor="instagram-followers">Followers *</Label>
                    <Input
                      type="number"
                      id="instagram-followers"
                      name="instagramFollowers"
                      required
                      placeholder="10000"
                      className="mt-2"
                    />
                  </div>
                  <div className="form-group">
                    <Label htmlFor="instagram-age">Account Age (in years) *</Label>
                    <Input
                      type="number"
                      id="instagram-age"
                      name="instagramAge"
                      required
                      step="0.1"
                      placeholder="2.5"
                      className="mt-2"
                    />
                  </div>
                </div>
              )}

              {/* Facebook Fields */}
              {socialMedia.facebook && (
                <div className="conditional-fields">
                  <h3>Facebook Details</h3>
                  <div className="form-group">
                    <Label htmlFor="facebook-handle">Facebook Page/Profile *</Label>
                    <Input
                      type="text"
                      id="facebook-handle"
                      name="facebookHandle"
                      required
                      placeholder="Your page name or URL"
                      className="mt-2"
                    />
                  </div>
                  <div className="form-group">
                    <Label htmlFor="facebook-followers">Followers/Friends *</Label>
                    <Input
                      type="number"
                      id="facebook-followers"
                      name="facebookFollowers"
                      required
                      placeholder="5000"
                      className="mt-2"
                    />
                  </div>
                  <div className="form-group">
                    <Label htmlFor="facebook-age">Account Age (in years) *</Label>
                    <Input
                      type="number"
                      id="facebook-age"
                      name="facebookAge"
                      required
                      step="0.1"
                      placeholder="3.0"
                      className="mt-2"
                    />
                  </div>
                </div>
              )}

              {/* TikTok Fields */}
              {socialMedia.tiktok && (
                <div className="conditional-fields">
                  <h3>TikTok Details</h3>
                  <div className="form-group">
                    <Label htmlFor="tiktok-handle">TikTok Handle *</Label>
                    <Input
                      type="text"
                      id="tiktok-handle"
                      name="tiktokHandle"
                      required
                      placeholder="@yourhandle"
                      className="mt-2"
                    />
                  </div>
                  <div className="form-group">
                    <Label htmlFor="tiktok-followers">Followers *</Label>
                    <Input
                      type="number"
                      id="tiktok-followers"
                      name="tiktokFollowers"
                      required
                      placeholder="15000"
                      className="mt-2"
                    />
                  </div>
                  <div className="form-group">
                    <Label htmlFor="tiktok-age">Account Age (in years) *</Label>
                    <Input
                      type="number"
                      id="tiktok-age"
                      name="tiktokAge"
                      required
                      step="0.1"
                      placeholder="1.5"
                      className="mt-2"
                    />
                  </div>
                </div>
              )}

              {/* YouTube Fields */}
              {socialMedia.youtube && (
                <div className="conditional-fields">
                  <h3>YouTube Details</h3>
                  <div className="form-group">
                    <Label htmlFor="youtube-handle">YouTube Channel *</Label>
                    <Input
                      type="text"
                      id="youtube-handle"
                      name="youtubeHandle"
                      required
                      placeholder="Your channel name or URL"
                      className="mt-2"
                    />
                  </div>
                  <div className="form-group">
                    <Label htmlFor="youtube-subscribers">Subscribers *</Label>
                    <Input
                      type="number"
                      id="youtube-subscribers"
                      name="youtubeSubscribers"
                      required
                      placeholder="50000"
                      className="mt-2"
                    />
                  </div>
                  <div className="form-group">
                    <Label htmlFor="youtube-age">Account Age (in years) *</Label>
                    <Input
                      type="number"
                      id="youtube-age"
                      name="youtubeAge"
                      required
                      step="0.1"
                      placeholder="2.0"
                      className="mt-2"
                    />
                  </div>
                </div>
              )}

              <div className="h-captcha" data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"></div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
