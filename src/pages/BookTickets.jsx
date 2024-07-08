import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

const bookingSchema = z.object({
  eventName: z.string().min(1, "Event name is required"),
  numberOfTickets: z.number().min(1, "At least one ticket is required"),
  attendeeName: z.string().min(1, "Attendee name is required"),
  paymentDetails: z.string().min(1, "Payment details are required"),
});

const BookTickets = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = (data) => {
    // Here you would typically send the data to your server
    console.log(data);
    toast("Tickets have been booked", {
      description: `${data.numberOfTickets} tickets for ${data.eventName}`,
    });
    navigate("/events");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Book Tickets</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">
            Event Name
          </label>
          <Input id="eventName" {...register("eventName")} />
          {errors.eventName && <p className="text-red-500 text-sm">{errors.eventName.message}</p>}
        </div>
        <div>
          <label htmlFor="numberOfTickets" className="block text-sm font-medium text-gray-700">
            Number of Tickets
          </label>
          <Input id="numberOfTickets" type="number" {...register("numberOfTickets", { valueAsNumber: true })} />
          {errors.numberOfTickets && <p className="text-red-500 text-sm">{errors.numberOfTickets.message}</p>}
        </div>
        <div>
          <label htmlFor="attendeeName" className="block text-sm font-medium text-gray-700">
            Attendee Name
          </label>
          <Input id="attendeeName" {...register("attendeeName")} />
          {errors.attendeeName && <p className="text-red-500 text-sm">{errors.attendeeName.message}</p>}
        </div>
        <div>
          <label htmlFor="paymentDetails" className="block text-sm font-medium text-gray-700">
            Payment Details
          </label>
          <Textarea id="paymentDetails" {...register("paymentDetails")} />
          {errors.paymentDetails && <p className="text-red-500 text-sm">{errors.paymentDetails.message}</p>}
        </div>
        <Button type="submit" className="w-full">Book Tickets</Button>
      </form>
    </div>
  );
};

export default BookTickets;