import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Service type
type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
};

// Sample marketplace services
const services: Service[] = [
  {
    id: 1,
    title: "List your Business for Sale here",
    description: "List your cleaning business for sale in the Marketplace, where existing cleaning contractors are looking to acquire bolt-on cleaning businesses, to scale-up their operations.",
    icon: "https://ext.same-assets.com/2489225554/700944208.png",
    link: "/list-your-business-for-sale",
  },
  {
    id: 2,
    title: "Check the Market Value of your Business here",
    description: "Get an estimate of the possible market value of your cleaning business - it's free. An estimate of what you could realize if you sold your business today.",
    icon: "https://ext.same-assets.com/2489225554/700944208.png",
    link: "/check-the-market-value-of-your-business-here",
  },
  {
    id: 3,
    title: "Track your Weekly ToDo List here",
    description: "A simple method to track your weekly & monthly ToDo Tasks and Reminders",
    icon: "https://ext.same-assets.com/2489225554/700944208.png",
    link: "/my-weekly-todo-list",
  },
  {
    id: 4,
    title: "Get Professional Tax & Accounting Advice here",
    description: "If you need professional advice to prepare your annual accounts and taxation return, you can get it here.",
    icon: "https://ext.same-assets.com/2489225554/700944208.png",
    link: "https://www.scendar.com/",
  },
  {
    id: 5,
    title: "Create a Cleaning Quote",
    description: "Prepare a cleaning quote for a new customer in 4 simple and easy steps & then email it automatically to your new customer - it works.",
    icon: "https://ext.same-assets.com/2489225554/700944208.png",
    link: "/create-a-quote",
  },
  {
    id: 6,
    title: "Create a Customer Invoice",
    description: "Prepare an invoice for your customer in 4 simple and easy steps & then email it automatically to your customer with your payment details - simple.",
    icon: "https://ext.same-assets.com/2489225554/700944208.png",
    link: "/create-an-invoice",
  },
  {
    id: 7,
    title: "Check your Un-paid Invoices",
    description: "A simple report of all Un-paid invoices to your customers. Mark invoices as Paid where appropriate and list outstanding invoices by 7, 14, 21, 28 days and over, for easy follow-up for payment.",
    icon: "https://ext.same-assets.com/2489225554/700944208.png",
    link: "/check-your-un-paid-invoices",
  },
  {
    id: 8,
    title: "Check your Outstanding Quotes",
    description: "A simple report of all outstanding quotes showing quote number, customer name, customer email & mobile, value and date of quote, for easy follow-up",
    icon: "https://ext.same-assets.com/2489225554/700944208.png",
    link: "/contractor-outstanding-quotes-report",
  },
  {
    id: 9,
    title: "Track your Weekly Expenses here",
    description: "A simple method to record the weekly expenses in running your business. The system keeps a progressive total of expenses by type and totals for your quarterly BAS report.",
    icon: "https://ext.same-assets.com/2489225554/700944208.png",
    link: "/enter-your-weekly-monthly-expenses",
  },
];

export default function MarketplacePage() {
  return (
    <>
      <Header />
      <main className="py-12">
        <div className="container-custom">
          {/* Marketplace Header */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Marketplace</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our range of tools and services designed to help your cleaning business succeed. From business administration to marketing, we've got you covered.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link href={service.link} key={service.id} className="block group">
                <Card className="h-full transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-md">
                  <CardHeader className="flex flex-row items-start gap-4 pb-2">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={36}
                      height={36}
                      className="mt-1"
                      unoptimized
                    />
                    <div>
                      <CardTitle className="text-lg text-primary group-hover:text-primary/80 transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
