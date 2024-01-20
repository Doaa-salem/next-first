import Link from "next/link";
import React from "react";
import TicketsList from "./TicketsList";
export const metadata = {
  title: "Create tickets",
  description: "Generated by create next app",
};

const Tickets = () => {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>
      <Link href='/tickets/create'>
        <button className='btn-primary'>Create New Ticket</button>
      </Link>
      <TicketsList />
    </main>
  );
};

export default Tickets;