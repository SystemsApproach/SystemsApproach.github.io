3.1 Switching and Bridging
==========================

In the simplest terms, a switch is a mechanism that allows us to
interconnect links to form a larger network. A switch is a multi-input,
multi-output device that transfers packets from an input to one or more
outputs. Thus, a switch adds the star topology (see
:numref:`Figure %s <fig-star>`) to the set of possible network
structures. A star topology has several attractive properties:

-  Even though a switch has a fixed number of inputs and outputs, which
   limits the number of hosts that can be connected to a single switch,
   large networks can be built by interconnecting a number of switches.

-  We can connect switches to each other and to hosts using
   point-to-point links, which typically means that we can build
   networks of large geographic scope.

-  Adding a new host to the network by connecting it to a switch does
   not necessarily reduce the performance of the network for other hosts
   already connected.

.. _fig-star:
.. figure:: figures/f03-01-9780123850591.png
   :width: 400px
   :align: center

   A switch provides a star topology.

This last claim cannot be made for the shared-media networks discussed
in the last chapter. For example, it is impossible for two hosts on the
same 10-Mbps Ethernet segment to transmit continuously at 10 Mbps
because they share the same transmission medium. Every host on a
switched network has its own link to the switch, so it may be entirely
possible for many hosts to transmit at the full link speed (bandwidth),
provided that the switch is designed with enough aggregate capacity.
Providing high aggregate throughput is one of the design goals for a
switch; we return to this topic later. In general, switched networks are
considered more *scalable* (i.e., more capable of growing to large
numbers of nodes) than shared-media networks because of this ability to
support many hosts at full speed.

A switch is connected to a set of links and, for each of these links,
runs the appropriate data link protocol to communicate with the node at
the other end of the link. A switch’s primary job is to receive incoming
packets on one of its links and to transmit them on some other link.
This function is sometimes referred to as either *switching* or
*forwarding,* and in terms of the Open Systems Interconnection (OSI)
architecture, it is the main function of the network layer, otherwise
known as *Layer 2*.

The question, then, is how does the switch decide which output link to
place each packet on? The general answer is that it looks at the header
of the packet for an identifier that it uses to make the decision. The
details of how it uses this identifier vary, but there are two common
approaches. The first is the *datagram* or *connectionless* approach.
The second is the *virtual circuit* or *connection-oriented* approach. A
third approach, *source routing*, is less common than these other two,
but it does have some useful applications.

One thing that is common to all networks is that we need to have a way
to identify the end nodes. Such identifiers are usually called
*addresses*. We have already seen examples of addresses, such as the
48-bit address used for Ethernet. The only requirement for Ethernet
addresses is that no two nodes on a network have the same address. This
is accomplished by making sure that all Ethernet cards are assigned a
*globally unique* identifier. For the following discussion, we assume
that each host has a globally unique address. Later on, we consider
other useful properties that an address might have, but global
uniqueness is adequate to get us started.

Another assumption that we need to make is that there is some way to
identify the input and output ports of each switch. There are at least
two sensible ways to identify ports: One is to number each port, and the
other is to identify the port by the name of the node (switch or host)
to which it leads. For now, we use numbering of the ports.

Datagrams
---------

The idea behind datagrams is incredibly simple: You just include in
every packet enough information to enable any switch to decide how to
get it to its destination. That is, every packet contains the complete
destination address. Consider the example network illustrated in
:numref:`Figure %s <fig-dgram>`, in which the hosts have addresses A,
B, C, and so on. To decide how to forward a packet, a switch consults
a *forwarding table* (sometimes called a *routing table*), an example
of which is depicted in :numref:`Table %s <tab-fwdtab>`. This
particular table shows the forwarding information that switch 2 needs
to forward datagrams in the example network. It is pretty easy to
figure out such a table when you have a complete map of a simple
network like that depicted here; we could imagine a network operator
configuring the tables statically. It is a lot harder to create the
forwarding tables in large, complex networks with dynamically changing
topologies and multiple paths between destinations. That harder
problem is known as *routing* and is the topic of a later section. We
can think of routing as a process that takes place in the background
so that, when a data packet turns up, we will have the right
information in the forwarding table to be able to forward, or switch,
the packet.

.. _fig-dgram:
.. figure:: figures/f03-02-9780123850591.png
   :width: 500px
   :align: center

   Datagram forwarding: an example network.

.. _tab-fwdtab:
.. table:: Forwarding Table for Switch 2.
   :align: center
   :widths: auto

   +-------------+------+
   | Destination | Port |
   +=============+======+
   | A           | 3    |
   +-------------+------+
   | B           | 0    |
   +-------------+------+
   | C           | 3    |
   +-------------+------+
   | D           | 3    |
   +-------------+------+
   | E           | 2    |
   +-------------+------+
   | F           | 1    |
   +-------------+------+
   | G           | 0    |
   +-------------+------+
   | H           | 0    |
   +-------------+------+

Datagram networks have the following characteristics:

-  A host can send a packet anywhere at any time, since any packet that
   turns up at a switch can be immediately forwarded (assuming a
   correctly populated forwarding table). For this reason, datagram
   networks are often called *connectionless*; this contrasts with the
   *connection-oriented* networks described below, in which some
   *connection state* needs to be established before the first data
   packet is sent.

-  When a host sends a packet, it has no way of knowing if the network
   is capable of delivering it or if the destination host is even up and
   running.

-  Each packet is forwarded independently of previous packets that might
   have been sent to the same destination. Thus, two successive packets
   from host A to host B may follow completely different paths (perhaps
   because of a change in the forwarding table at some switch in the
   network).

-  A switch or link failure might not have any serious effect on
   communication if it is possible to find an alternate route around the
   failure and to update the forwarding table accordingly.

This last fact is particularly important to the history of datagram
networks. One of the important design goals of the Internet is
robustness to failures, and history has shown it to be quite effective
at meeting this goal.

Virtual Circuit Switching
-------------------------

A second technique for packet switching uses the concept of a *virtual
circuit* (VC). This approach, which is also referred to as a
*connection-oriented model*, requires setting up a virtual connection
from the source host to the destination host before any data is
sent. To understand how this works, consider :numref:`Figure %s
<fig-vcircuit>`, where host A again wants to send packets to
host B. We can think of this as a two-stage process. The first stage
is “connection setup.” The second is data transfer. We consider each
in turn.

.. _fig-vcircuit:
.. figure:: figures/f03-03-9780123850591.png
   :width: 500px
   :align: center

   An example of a virtual circuit network.

In the connection setup phase, it is necessary to establish a
“connection state” in each of the switches between the source and
destination hosts. The connection state for a single connection consists
of an entry in a “VC table” in each switch through which the connection
passes. One entry in the VC table on a single switch contains:

-  A *virtual circuit identifier* (VCI) that uniquely identifies the
   connection at this switch and which will be carried inside the header
   of the packets that belong to this connection

-  An incoming interface on which packets for this VC arrive at the
   switch

-  An outgoing interface in which packets for this VC leave the switch

-  A potentially different VCI that will be used for outgoing packets

The semantics of one such entry is as follows: If a packet arrives on
the designated incoming interface and that packet contains the
designated VCI value in its header, then that packet should be sent out
the specified outgoing interface with the specified outgoing VCI value
having been first placed in its header.

Note that the combination of the VCI of packets as they are received at
the switch *and* the interface on which they are received uniquely
identifies the virtual connection. There may of course be many virtual
connections established in the switch at one time. Also, we observe that
the incoming and outgoing VCI values are generally not the same. Thus,
the VCI is not a globally significant identifier for the connection;
rather, it has significance only on a given link (i.e., it has
*link-local scope*).

Whenever a new connection is created, we need to assign a new VCI for
that connection on each link that the connection will traverse. We also
need to ensure that the chosen VCI on a given link is not currently in
use on that link by some existing connection.

There are two broad approaches to establishing connection state. One is
to have a network administrator configure the state, in which case the
virtual circuit is “permanent.” Of course, it can also be deleted by the
administrator, so a permanent virtual circuit (PVC) might best be
thought of as a long-lived or administratively configured VC.
Alternatively, a host can send messages into the network to cause the
state to be established. This is referred to as *signalling*, and the
resulting virtual circuits are said to be *switched*. The salient
characteristic of a switched virtual circuit (SVC) is that a host may
set up and delete such a VC dynamically without the involvement of a
network administrator. Note that an SVC should more accurately be called
a *signalled* VC, since it is the use of signalling (not switching) that
distinguishes an SVC from a PVC.

Let’s assume that a network administrator wants to manually create a
new virtual connection from host A to host B. First, the administrator
needs to identify a path through the network from A to B. In the
example network of :numref:`Figure %s <fig-vcircuit>`, there is only
one such path, but in general, this may not be the case. The
administrator then picks a VCI value that is currently unused on each
link for the connection. For the purposes of our example, let’s
suppose that the VCI value 5 is chosen for the link from host A to
switch 1, and that 11 is chosen for the link from switch 1 to
switch 2. In that case, switch 1 needs to have an entry in its VC
table configured as shown in :numref:`Table %s <tab-vctab>`.

.. _tab-vctab:
.. table:: Example Virtual Circuit Table Entry for Switch 1.
   :align: center
   :widths: auto

   +--------------------+--------------+--------------------+--------------+
   | Incoming Interface | Incoming VCI | Outgoing Interface | Outgoing VCI |
   +====================+==============+====================+==============+
   | 2                  | 5            | 1                  | 11           |
   +--------------------+--------------+--------------------+--------------+

Similarly, suppose that the VCI of 7 is chosen to identify this
connection on the link from switch 2 to switch 3 and that a VCI of 4 is
chosen for the link from switch 3 to host B. In that case, switches 2
and 3 need to be configured with VC table entries as shown in
:numref:`Table %s <tab-vctab2>` and  :numref:`Table %s <tab-vctab3>`,
respectively. Note that the “outgoing” VCI value at one switch is the
“incoming” VCI value at the next switch.

.. _tab-vctab2:
.. table:: Virtual Circuit Table Entry at Switch 2.
   :align: center
   :widths: auto

   +--------------------+--------------+--------------------+--------------+
   | Incoming Interface | Incoming VCI | Outgoing Interface | Outgoing VCI |
   +====================+==============+====================+==============+
   | 3                  | 11           | 2                  | 7            |
   +--------------------+--------------+--------------------+--------------+

.. _tab-vctab3:
.. table:: Virtual Circuit Table Entry at Switch 3.
   :align: center
   :widths: auto

   +--------------------+--------------+--------------------+--------------+
   | Incoming Interface | Incoming VCI | Outgoing Interface | Outgoing VCI |
   +====================+==============+====================+==============+
   | 0                  | 7            | 1                  | 4            |
   +--------------------+--------------+--------------------+--------------+

.. _fig-vcdat:
.. figure:: figures/f03-04-9780123850591.png
   :width: 500px
   :align: center

   A packet is sent into a virtual circuit network.

Once the VC tables have been set up, the data transfer phase can
proceed, as illustrated in :numref:`Figure %s <fig-vcdat>`. For any
packet that it wants to send to host B, A puts the VCI value of 5 in
the header of the packet and sends it to switch 1. Switch 1 receives
any such packet on interface 2, and it uses the combination of the
interface and the VCI in the packet header to find the appropriate VC
table entry. As shown in :numref:`Table %s <tab-vctab>`, the table
entry in this case tells switch 1 to forward the packet out of
interface 1 and to put the VCI value 11 in the header when the packet
is sent. Thus, the packet will arrive at switch 2 on interface 3
bearing VCI 11. Switch 2 looks up interface 3 and VCI 11 in its VC
table (as shown in :numref:`Table %s <tab-vctab2>`) and sends the
packet on to switch  3 after updating the VCI value in the packet
header appropriately, as shown in :numref:`Figure %s
<fig-vcdat2>`. This process continues until it arrives at host B with
the VCI value of 4 in the packet. To host B, this identifies the
packet as having come from host A.

In real networks of reasonable size, the burden of configuring VC tables
correctly in a large number of switches would quickly become excessive
using the above procedures. Thus, either a network management tool or
some sort of signalling (or both) is almost always used, even when
setting up “permanent” VCs. In the case of PVCs, signalling is initiated
by the network administrator, while SVCs are usually set up using
signalling by one of the hosts. We consider now how the same VC just
described could be set up by signalling from the host.

.. _fig-vcdat2:
.. figure:: figures/f03-05-9780123850591.png
   :width: 500px
   :align: center

   A packet makes its way through a virtual circuit
   network.

To start the signalling process, host A sends a setup message into the
network—that is, to switch 1. The setup message contains, among other
things, the complete destination address of host B. The setup message
needs to get all the way to B to create the necessary connection state
in every switch along the way. We can see that getting the setup message
to B is a lot like getting a datagram to B, in that the switches have to
know which output to send the setup message to so that it eventually
reaches B. For now, let’s just assume that the switches know enough
about the network topology to figure out how to do that, so that the
setup message flows on to switches 2 and 3 before finally reaching
host B.

When switch 1 receives the connection request, in addition to sending
it on to switch 2, it creates a new entry in its virtual circuit table
for this new connection. This entry is exactly the same as shown
previously in :numref:`Table %s <tab-vctab>`. The main difference is
that now the task of assigning an unused VCI value on the interface is
performed by the switch for that port. In this example, the switch
picks the value 5. The virtual circuit table now has the following
information: “When packets arrive on port 2 with identifier 5, send
them out on port 1.” Another issue is that, somehow, host A will need
to learn that it should put the VCI value of 5 in packets that it
wants to send to B; we will see how that happens below.

When switch 2 receives the setup message, it performs a similar process;
in this example, it picks the value 11 as the incoming VCI value.
Similarly, switch 3 picks 7 as the value for its incoming VCI. Each
switch can pick any number it likes, as long as that number is not
currently in use for some other connection on that port of that switch.
As noted above, VCIs have link-local scope; that is, they have no global
significance.

Finally, the setup message arrives as host B. Assuming that B is healthy
and willing to accept a connection from host A, it too allocates an
incoming VCI value, in this case 4. This VCI value can be used by B to
identify all packets coming from host A.

Now, to complete the connection, everyone needs to be told what their
downstream neighbor is using as the VCI for this connection. Host B
sends an acknowledgment of the connection setup to switch 3 and includes
in that message the VCI that it chose (4). Now switch 3 can complete the
virtual circuit table entry for this connection, since it knows the
outgoing value must be 4. Switch 3 sends the acknowledgment on to
switch 2, specifying a VCI of 7. Switch 2 sends the message on to
switch 1, specifying a VCI of 11. Finally, switch 1 passes the
acknowledgment on to host A, telling it to use the VCI of 5 for this
connection.

At this point, everyone knows all that is necessary to allow traffic to
flow from host A to host B. Each switch has a complete virtual circuit
table entry for the connection. Furthermore, host A has a firm
acknowledgment that everything is in place all the way to host B. At
this point, the connection table entries are in place in all three
switches just as in the administratively configured example above, but
the whole process happened automatically in response to the signalling
message sent from A. The data transfer phase can now begin and is
identical to that used in the PVC case.

When host A no longer wants to send data to host B, it tears down the
connection by sending a teardown message to switch 1. The switch removes
the relevant entry from its table and forwards the message on to the
other switches in the path, which similarly delete the appropriate table
entries. At this point, if host A were to send a packet with a VCI of 5
to switch 1, it would be dropped as if the connection had never existed.

There are several things to note about virtual circuit switching:

-  Since host A has to wait for the connection request to reach the far
   side of the network and return before it can send its first data
   packet, there is at least one round-trip time (RTT) of delay before
   data is sent.

-  While the connection request contains the full address for host B
   (which might be quite large, being a global identifier on the
   network), each data packet contains only a small identifier, which is
   only unique on one link. Thus, the per-packet overhead caused by the
   header is reduced relative to the datagram model. More importantly,
   the lookup is fast because the virtual circuit number can be treated
   as an index into a table rather than as a key that has to be looked
   up.

-  If a switch or a link in a connection fails, the connection is broken
   and a new one will need to be established. Also, the old one needs to
   be torn down to free up table storage space in the switches.

-  The issue of how a switch decides which link to forward the
   connection request on has been glossed over. In essence, this is the
   same problem as building up the forwarding table for datagram
   forwarding, which requires some sort of *routing algorithm*. Routing
   is described in a later section, and the algorithms described there
   are generally applicable to routing setup requests as well as
   datagrams.

One of the nice aspects of virtual circuits is that by the time the host
gets the go-ahead to send data, it knows quite a lot about the
network—for example, that there really is a route to the receiver and
that the receiver is willing and able to receive data. It is also
possible to allocate resources to the virtual circuit at the time it is
established. For example, X.25 (an early and now largely obsolete
virtual-circuit-based networking technology) employed the following
three-part strategy:

1. Buffers are allocated to each virtual circuit when the circuit is
   initialized.

2. The sliding window protocol is run between each pair of nodes along
   the virtual circuit, and this protocol is augmented with flow control
   to keep the sending node from over-running the buffers allocated at
   the receiving node.

3. The circuit is rejected by a given node if not enough buffers are
   available at that node when the connection request message is
   processed.

In doing these three things, each node is ensured of having the buffers
it needs to queue the packets that arrive on that circuit. This basic
strategy is usually called *hop-by-hop flow control.*

By comparison, a datagram network has no connection establishment phase,
and each switch processes each packet independently, making it less
obvious how a datagram network would allocate resources in a meaningful
way. Instead, each arriving packet competes with all other packets for
buffer space. If there are no free buffers, the incoming packet must be
discarded. We observe, however, that even in a datagram-based network a
source host often sends a sequence of packets to the same destination
host. It is possible for each switch to distinguish among the set of
packets it currently has queued, based on the source/destination pair,
and thus for the switch to ensure that the packets belonging to each
source/destination pair are receiving a fair share of the switch’s
buffers.

In the virtual circuit model, we could imagine providing each circuit
with a different *quality of service* (QoS). In this setting, the term
*quality of service* is usually taken to mean that the network gives the
user some kind of performance-related guarantee, which in turn implies
that switches set aside the resources they need to meet this guarantee.
For example, the switches along a given virtual circuit might allocate a
percentage of each outgoing link’s bandwidth to that circuit. As another
example, a sequence of switches might ensure that packets belonging to a
particular circuit not be delayed (queued) for more than a certain
amount of time.

There have been a number of successful examples of virtual circuit
technologies over the years, notably X.25, Frame Relay, and Asynchronous
Transfer Mode (ATM). With the success of the Internet’s connectionless
model, however, none of them enjoys great popularity today. One of the
most common applications of virtual circuits for many years was the
construction of *virtual private networks* (VPNs), a subject discussed
in a later section. Even that application is now mostly supported using
Internet-based technologies today.

Asynchronous Transfer Mode (ATM)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Asynchronous Transfer Mode (ATM) is probably the most well-known virtual
circuit-based networking technology, although it is now well past its
peak in terms of deployment. ATM became an important technology in the
1980s and early 1990s for a variety of reasons, not the least of which
is that it was embraced by the telephone industry, which at that point
in time was less active in computer networks (other than as a supplier
of links from which other people built networks). ATM also happened to
be in the right place at the right time, as a high-speed switching
technology that appeared on the scene just when shared media like
Ethernet and token rings were starting to look a bit too slow for many
users of computer networks. In some ways ATM was a competing technology
with Ethernet switching, and it was seen by many as a competitor to IP
as well.

.. _fig-atmcell:
.. figure:: figures/f03-06-9780123850591.png
   :width: 550px
   :align: center

   ATM cell format at the UNI.

The approach ATM takes has some interesting properties, which makes it
worth examining a bit further. The picture of the ATM packet format—more
commonly called an ATM *cell*—in :numref:`Figure %s <fig-atmcell>` will illustrate
the main points. We’ll skip the generic flow control (GFC) bits, which
never saw much use, and start with the 24 bits that are labelled VPI
(virtual path identifier—8 bits) and VCI (virtual circuit identifier—16
bits). If you consider these bits together as a single 24-bit field,
they correspond to the virtual circuit identifier introduced above. The
reason for breaking the field into two parts was to allow for a level of
hierarchy: All the circuits with the same VPI could, in some cases, be
treated as a group (a virtual path) and could all be switched together
looking only at the VPI, simplifying the work of a switch that could
ignore all the VCI bits and reducing the size of the VC table
considerably.

Skipping to the last header byte we find an 8-bit cyclic redundancy
check (CRC), known as the *header error check* (``HEC``). It uses CRC-8
and provides error detection and single-bit error correction capability
on the cell header only. Protecting the cell header is particularly
important because an error in the ``VCI`` will cause the cell to be
misdelivered.

Probably the most significant thing to notice about the ATM cell, and
the reason it is called a cell and not a packet, is that it comes in
only one size: 53 bytes. What was the reason for this? One big reason
was to facilitate the implementation of hardware switches. When ATM was
being created in the mid- and late 1980s, 10-Mbps Ethernet was the
cutting-edge technology in terms of speed. To go much faster, most
people thought in terms of hardware. Also, in the telephone world,
people think big when they think of switches—telephone switches often
serve tens of thousands of customers. Fixed-length packets turn out to
be a very helpful thing if you want to build fast, highly scalable
switches. There are two main reasons for this:

1. It is easier to build hardware to do simple jobs, and the job of
   processing packets is simpler when you already know how long each one
   will be.

2. If all packets are the same length, then you can have lots of
   switching elements all doing much the same thing in parallel, each of
   them taking the same time to do its job.

This second reason, the enabling of parallelism, greatly improves the
scalability of switch designs. It would be overstating the case to say
that fast parallel hardware switches can only be built using
fixed-length cells. However, it is certainly true that cells ease the
task of building such hardware and that there was a lot of knowledge
available about how to build cell switches in hardware at the time the
ATM standards were being defined. As it turns out, this same principle
is still applied in many switches and routers today, even if they deal
in variable length packets—they cut those packets into some sort of cell
in order to forward them from input port to output port, but this is all
internal to the switch.

There is another good argument in favor of small ATM cells, having to do
with end-to-end latency. ATM was designed to carry both voice phone
calls (the dominant use case at the time) and data. Because voice is
low-bandwidth but has strict delay requirements, the last thing you want
is for a small voice packet queued behind a large data packet at a
switch. If you force all packets to be small (i.e., cell-sized), then
large data packets can still be supported by reassembling a set of cells
into a packet, and you get the benefit of being able to interleave the
forwarding of voice cells and data cells at every switch along the path
from source to destination. This idea of using small cells to improve
end-to-end latency is alive and well today in cellular access networks.

Having decided to use small, fixed-length packets, the next question was
what is the right length to fix them at? If you make them too short,
then the amount of header information that needs to be carried around
relative to the amount of data that fits in one cell gets larger, so the
percentage of link bandwidth that is actually used to carry data goes
down. Even more seriously, if you build a device that processes cells at
some maximum number of cells per second, then as cells get shorter the
total data rate drops in direct proportion to cell size. An example of
such a device might be a network adaptor that reassembles cells into
larger units before handing them up to the host. The performance of such
a device depends directly on cell size. On the other hand, if you make
the cells too big, then there is a problem of wasted bandwidth caused by
the need to pad transmitted data to fill a complete cell. If the cell
payload size is 48 bytes and you want to send 1 byte, you’ll need to
send 47 bytes of padding. If this happens a lot, then the utilization of
the link will be very low. The combination of relatively high
header-to-payload ratio plus the frequency of sending partially filled
cells did actually lead to some noticeable inefficiency in ATM networks
that some detractors called the *cell tax*.

As it turns out, 48 bytes was picked for the ATM cell payload as a
compromise. There were good arguments for both larger and smaller cells,
and 48 made almost no one happy—a power of two would certainly have been
better for computers to process.

Source Routing
--------------

A third approach to switching that uses neither virtual circuits nor
conventional datagrams is known as *source routing*. The name derives
from the fact that all the information about network topology that is
required to switch a packet across the network is provided by the source
host.

There are various ways to implement source routing. One would be to
assign a number to each output of each switch and to place that number
in the header of the packet. The switching function is then very
simple: For each packet that arrives on an input, the switch would
read the port number in the header and transmit the packet on that
output. However, since there will in general be more than one switch
in the path between the sending and the receiving host, the header for
the packet needs to contain enough information to allow every switch
in the path to determine which output the packet needs to be placed
on. One way to do this would be to put an ordered list of switch ports
in the header and to rotate the list so that the next switch in the
path is always at the front of the list. :numref:`Figure %s
<fig-source-route>` illustrates this idea.

.. _fig-source-route:
.. figure:: figures/f03-07-9780123850591.png
   :width: 500px
   :align: center

   Source routing in a switched network (where the switch
   reads the rightmost number).

In this example, the packet needs to traverse three switches to get from
host A to host B. At switch 1, it needs to exit on port 1, at the next
switch it needs to exit at port 0, and at the third switch it needs to
exit at port 3. Thus, the original header when the packet leaves host A
contains the list of ports (3, 0, 1), where we assume that each switch
reads the rightmost element of the list. To make sure that the next
switch gets the appropriate information, each switch rotates the list
after it has read its own entry. Thus, the packet header as it leaves
switch 1 enroute to switch 2 is now (1, 3, 0); switch 2 performs another
rotation and sends out a packet with (0, 1, 3) in the header. Although
not shown, switch 3 performs yet another rotation, restoring the header
to what it was when host A sent it.

There are several things to note about this approach. First, it assumes
that host A knows enough about the topology of the network to form a
header that has all the right directions in it for every switch in the
path. This is somewhat analogous to the problem of building the
forwarding tables in a datagram network or figuring out where to send a
setup packet in a virtual circuit network. In practice, however, it is
the first switch at the ingress to the network (as opposed to the end
host connected to that switch) that appends the source route.

Second, observe that we cannot predict how big the header needs to be,
since it must be able to hold one word of information for every switch
on the path. This implies that headers are probably of variable length
with no upper bound, unless we can predict with absolute certainty the
maximum number of switches through which a packet will ever need to
pass.

Third, there are some variations on this approach. For example, rather
than rotate the header, each switch could just strip the first element
as it uses it. Rotation has an advantage over stripping, however: Host B
gets a copy of the complete header, which may help it figure out how to
get back to host A. Yet another alternative is to have the header carry
a pointer to the current “next port” entry, so that each switch just
updates the pointer rather than rotating the header; this may be more
efficient to implement. We show these three approaches in
:numref:`Figure %s <fig-sroute-apps>`. In each case, the entry that
this switch needs to read is ``A``, and the entry that the next switch
needs to read is ``B``.

.. _fig-sroute-apps:
.. figure:: figures/f03-08-9780123850591.png
   :width: 550px
   :align: center

   Three ways to handle headers for source routing:
   (a) rotation; (b) stripping; (c) pointer. The labels are read
   right to left.

Source routing can be used in both datagram networks and virtual circuit
networks. For example, the Internet Protocol, which is a datagram
protocol, includes a source route option that allows selected packets to
be source routed, while the majority are switched as conventional
datagrams. Source routing is also used in some virtual circuit networks
as the means to get the initial setup request along the path from source
to destination.

Source routes are sometimes categorized as *strict* or *loose*. In a
strict source route, every node along the path must be specified,
whereas a loose source route only specifies a set of nodes to be
traversed, without saying exactly how to get from one node to the next.
A loose source route can be thought of as a set of waypoints rather than
a completely specified route. The loose option can be helpful to limit
the amount of information that a source must obtain to create a source
route. In any reasonably large network, it is likely to be hard for a
host to get the complete path information it needs to construct correct
a strict source route to any destination. But both types of source
routes do find application in certain scenarios, as we will see in later
chapters.

L2 Switches and Bridges
-----------------------

Having discussed some of the basic ideas behind switching, we now focus
more closely on a specific switching technology. We begin by considering
a class of switch that is used to forward packets between LANs (local
area networks) such as Ethernets. Such switches are today known as *L2
switches*, and they are very widely used in campus and enterprise
networks. Historically, they were more commonly referred to as *bridges*
because they were used to “bridge” ethernet segments to build an
*extended LAN*.

The following starts with the historical perspective (using bridges to
connect a set of Ethernet segments), and then shifts to the perspective
in wide-spread use today (using L2 switches to connect a set of
point-to-point links). But whether we call the device a bridge or a
switch—and the network you build an extended LAN or a switched
Ethernet—the two behave in *exactly* the same way.

To begin, suppose you have a pair of Ethernets that you want to
interconnect. One approach you might try is to put a repeater between
them. This would not be a workable solution, however, if doing so
exceeded the physical limitations of the Ethernet. (Recall that no more
than two repeaters between any pair of hosts and no more than a total of
2500 m in length are allowed.) An alternative would be to put a node
with a pair of Ethernet adaptors between the two Ethernets and have the
node forward frames from one Ethernet to the other. This node would
differ from a repeater, which operates on bits, not frames, and just
blindly copies the bits received on one interface to another. Instead,
this node would fully implement the Ethernet’s collision detection and
media access protocols on each interface. Hence, the length and
number-of-host restrictions of the Ethernet, which are all about
managing collisions, would not apply to the combined pair of Ethernets
connected in this way. This device operates in promiscuous mode,
accepting all frames transmitted on either of the Ethernets, and
forwarding them to the other.

In their simplest variants, bridges simply accept LAN frames on their
inputs and forward them out on all other outputs. This simple strategy
was used by early bridges but has some pretty serious limitations as
we’ll see below. A number of refinements were added over the years
to make bridges an effective mechanism for interconnecting a set of
LANs. The rest of this section fills in the more interesting details.

Learning Bridges
~~~~~~~~~~~~~~~~

The first optimization we can make to a bridge is to observe that it
need not forward all frames that it receives. Consider the bridge in
:numref:`Figure %s <fig-elan2>`. Whenever a frame from host A that is
addressed to host B arrives on port 1, there is no need for the bridge
to forward the frame out over port 2. The question, then, is how does
a bridge come to learn on which port the various hosts reside?

.. _fig-elan2:
.. figure:: figures/f03-09-9780123850591.png
   :width: 500px
   :align: center

   Illustration of a learning bridge.

One option would be to have a human download a table into the bridge
similar to the one given in :numref:`Table %s <tab-learn>`. Then,
whenever the bridge receives a frame on port 1 that is addressed to
host A, it would not forward the frame out on port 2; there would be
no need because host A would have already directly received the frame
on the LAN connected to port 1. Anytime a frame addressed to host A
was received on port 2, the bridge would forward the frame out on
port 1.

.. _tab-learn:
.. table:: Forwarding Table Maintained by a Bridge.
   :align: center
   :widths: auto

   +------+------+
   | Host | Port |
   +======+======+
   | A    | 1    |
   +------+------+
   | B    | 1    |
   +------+------+
   | C    | 1    |
   +------+------+
   | X    | 2    |
   +------+------+
   | Y    | 2    |
   +------+------+
   | Z    | 2    |
   +------+------+

Having a human maintain this table is too burdensome, and there is a
simple trick by which a bridge can learn this information for itself.
The idea is for each bridge to inspect the *source* address in all the
frames it receives. Thus, when host A sends a frame to a host on either
side of the bridge, the bridge receives this frame and records the fact
that a frame from host A was just received on port 1. In this way, the
bridge can build a table just like :numref:`Table %s <tab-learn>`.

Note that a bridge using such a table implements a version of the
datagram (or connectionless) model of forwarding described earlier. Each
packet carries a global address, and the bridge decides which output to
send a packet on by looking up that address in a table.

When a bridge first boots, this table is empty; entries are added over
time. Also, a timeout is associated with each entry, and the bridge
discards the entry after a specified period of time. This is to protect
against the situation in which a host—and, as a consequence, its LAN
address—is moved from one network to another. Thus, this table is not
necessarily complete. Should the bridge receive a frame that is
addressed to a host not currently in the table, it goes ahead and
forwards the frame out on all the other ports. In other words, this
table is simply an optimization that filters out some frames; it is not
required for correctness.

Implementation
~~~~~~~~~~~~~~

The code that implements the learning bridge algorithm is quite
simple, and we sketch it here. Structure ``BridgeEntry`` defines a
single entry in the bridge’s forwarding table; these are stored in a
``Map`` structure (which supports ``mapCreate``, ``mapBind``, and
``mapResolve`` operations) to enable entries to be efficiently located
when packets arrive from sources already in the table. The constant
``MAX_TTL`` specifies how long an entry is kept in the table before it
is discarded.

.. code-block:: c

   #define BRIDGE_TAB_SIZE   1024  /* max size of bridging table */
   #define MAX_TTL           120   /* time (in seconds) before an entry is flushed */

   typedef struct {
       MacAddr     destination;    /* MAC address of a node */
       int         ifnumber;       /* interface to reach it */
       u_short     TTL;            /* time to live */
       Binding     binding;        /* binding in the Map */
   } BridgeEntry;

   int     numEntries = 0;
   Map     bridgeMap = mapCreate(BRIDGE_TAB_SIZE, sizeof(BridgeEntry));

The routine that updates the forwarding table when a new packet arrives
is given by ``updateTable``. The arguments passed are the source media
access control (MAC) address contained in the packet and the interface
number on which it was received. Another routine, not shown here, is
invoked at regular intervals, scans the entries in the forwarding table,
and decrements the ``TTL`` (time to live) field of each entry,
discarding any entries whose ``TTL`` has reached 0. Note that the
``TTL`` is reset to ``MAX_TTL`` every time a packet arrives to refresh
an existing table entry and that the interface on which the destination
can be reached is updated to reflect the most recently received packet.

.. code-block:: c

   void 
   updateTable (MacAddr src, int inif) 
   {
       BridgeEntry       *b;

       if (mapResolve(bridgeMap, &src, (void **)&b) == FALSE ) 
       {
           /* this address is not in the table, so try to add it */
           if (numEntries < BRIDGE_TAB_SIZE) 
           {
               b = NEW(BridgeEntry);
               b->binding = mapBind( bridgeMap, &src, b);
               /* use source address of packet as dest. address in table */
               b->destination = src;
               numEntries++;
           }
           else 
           {
               /* can't fit this address in the table now, so give up */
               return;
           }
       }
       /* reset TTL and use most recent input interface */
       b->TTL = MAX_TTL;
       b->ifnumber = inif;
   }

Note that this implementation adopts a simple strategy in the case where
the bridge table has become full to capacity—it simply fails to add the
new address. Recall that completeness of the bridge table is not
necessary for correct forwarding; it just optimizes performance. If
there is some entry in the table that is not currently being used, it
will eventually time out and be removed, creating space for a new entry.
An alternative approach would be to invoke some sort of cache
replacement algorithm on finding the table full; for example, we might
locate and remove the entry with the smallest TTL to accommodate the new
entry.

Spanning Tree Algorithm
~~~~~~~~~~~~~~~~~~~~~~~

The preceding strategy works just fine until the network has a loop in
it, in which case it fails in a horrible way—frames potentially get
forwarded forever. This is easy to see in the example depicted in
:numref:`Figure %s <fig-elan3>`, where switches S1, S4, and S6 form a loop.

.. _fig-elan3:
.. figure:: figures/impl/Slide5.png
   :width: 500px
   :align: center

   Switched Ethernet with loops.

Note that we are now making the shift from calling the each forwarding
device a bridge (connecting segments that might reach multiple other
devices) to instead calling them L2 switches (connecting point-to-point
links that reach just one other device). To keep the example managable,
we include just three hosts. In practice, switches typically have 16,
24, or 48 ports, meaning they are able to connect to that many hosts
(and other swiches).

In our example switched network, suppose that a packet enters switch S4
from Host C and that the destination address is one not yet in any
switches’s forwarding table: S4 sends a copy of the packet out its two
other ports: to switches S1 and S6. Switch S6 forwards the packet onto
S1 (and meanwhile, S1 forwards the packet onto S6), both of which in
turn forward their packets back to S4. Switch S4 still doesn’t have this
destination in its table, so it forwards the packet out its two other
ports. There is nothing to stop this cycle from repeating endlessly,
with packets looping in both directions among S1, S4, and S6.

Why would a switched Ethernet (or extended LAN) come to have a loop in
it? One possibility is that the network is managed by more than one
administrator, for example, because it spans multiple departments in an
organization. In such a setting, it is possible that no single person
knows the entire configuration of the network, meaning that a switch
that closes a loop might be added without anyone knowing. A second, more
likely scenario is that loops are built into the network on purpose—to
provide redundancy in case of failure. After all, a network with no
loops needs only one link failure to become split into two separate
partitions.

Whatever the cause, switches must be able to correctly handle loops.
This problem is addressed by having the switches run a distributed
*spanning tree* algorithm. If you think of the network as being
represented by a graph that possibly has loops (cycles), then a
spanning tree is a subgraph of this graph that covers (spans) all the
vertices but contains no cycles. That is, a spanning tree keeps all of
the vertices of the original graph but throws out some of the
edges. For example, :numref:`Figure %s <fig-graphs>` shows a cyclic
graph on the left and one of possibly many spanning trees on the
right.

.. _fig-graphs:
.. figure:: figures/f03-11-9780123850591.png
   :width: 500px
   :align: center

   Example of (a) a cyclic graph; (b) a corresponding spanning
   tree.

The idea of a spanning tree is simple enough: It’s a subset of the
actual network topology that has no loops and that reaches all the
devices in the network. The hard part is how all of the switches
coordinate their decisions to arrive at a single view of the spanning
tree. After all, one topology is typically able to be covered by
multiple spanning trees. The answer lies in the spanning tree protocol,
which we’ll describe now.

The spanning tree algorithm, which was developed by Radia Perlman, then
at the Digital Equipment Corporation, is a protocol used by a set of
switches to agree upon a spanning tree for a particular network. (The
IEEE 802.1 specification is based on this algorithm.) In practice, this
means that each switch decides the ports over which it is and is not
willing to forward frames. In a sense, it is by removing ports from the
topology that the network is reduced to an acyclic tree. It is even
possible that an entire switch will not participate in forwarding
frames, which seems kind of strange at first glance. The algorithm is
dynamic, however, meaning that the switches are always prepared to
reconfigure themselves into a new spanning tree should some switch fail,
and so those unused ports and switches provide the redundant capacity
needed to recover from failures.

The main idea of the spanning tree is for the switches to select the
ports over which they will forward frames. The algorithm selects ports
as follows. Each switch has a unique identifier; for our purposes, we
use the labels S1, S2, S3, and so on. The algorithm first elects the
switch with the smallest ID as the root of the spanning tree; exactly
how this election takes place is described below. The root switch always
forwards frames out over all of its ports. Next, each switch computes
the shortest path to the root and notes which of its ports is on this
path. This port is also selected as the switch’s preferred path to the
root. Finally, to account for the possibility there could be another
switch connected to its ports, the switch elect a single *designated*
switch that will be responsible for forwarding frames toward the root.
Each designated switch is the one that is closest to the root. If two or
more switches are equally close to the root, then the switches’
identifiers are used to break ties, and the smallest ID wins. Of course,
each switch might be connected to more than one other switch, so it
participates in the election of a designated switch for each such port.
In effect, this means that each switch decides if it is the designated
switch relative to each of its ports. The switch forwards frames over
those ports for which it is the designated switch.

.. _fig-elan4:
.. figure:: figures/impl/Slide6.png
   :width: 500px
   :align: center

   Spanning tree with some ports not selected.

:numref:`Figure %s <fig-elan4>` shows the spanning tree that
corresponds to the network shown in :numref:`Figure %s
<fig-elan3>`. In this example, S1 is the root, since it has the
smallest ID. Notice that S3 and S5 are connected to each other, but S5
is the designated switch since it is closer to the root. Similarly, S5
and S7 are connected to each other, but in this case S5 is the
designated switch since it has the smaller ID; both are an equal
distance from S1.

While it is possible for a human to look at the network given in
:numref:`Figure %s <fig-elan3>` and to compute the spanning tree given
in the :numref:`Figure %s <fig-elan4>` according to the rules given
above, the switches do not have the luxury of being able to see the
topology of the entire network, let alone peek inside other switches
to see their ID. Instead, they have to exchange configuration messages
with each other and then decide whether or not they are the root or a
designated switch based on these messages.

Specifically, the configuration messages contain three pieces of
information:

1. The ID for the switch that is sending the message.

2. The ID for what the sending switch believes to be the root switch.

3. The distance, measured in hops, from the sending switch to the root
   switch.

Each switch records the current *best* configuration message it has seen
on each of its ports (“best” is defined below), including both messages
it has received from other switches and messages that it has itself
transmitted.

Initially, each switch thinks it is the root, and so it sends a
configuration message out on each of its ports identifying itself as the
root and giving a distance to the root of 0. Upon receiving a
configuration message over a particular port, the switch checks to see
if that new message is better than the current best configuration
message recorded for that port. The new configuration message is
considered *better* than the currently recorded information if any of
the following is true:

-  It identifies a root with a smaller ID.

-  It identifies a root with an equal ID but with a shorter distance.

-  The root ID and distance are equal, but the sending switch has a
   smaller ID

If the new message is better than the currently recorded information,
the switch discards the old information and saves the new information.
However, it first adds 1 to the distance-to-root field since the switch
is one hop farther away from the root than the switch that sent the
message.

When a switch receives a configuration message indicating that it is not
the root—that is, a message from a switch with a smaller ID—the switch
stops generating configuration messages on its own and instead only
forwards configuration messages from other switches, after first adding
1 to the distance field. Likewise, when a switch receives a
configuration message that indicates it is not the designated switch for
that port—that is, a message from a switch that is closer to the root or
equally far from the root but with a smaller ID—the switch stops sending
configuration messages over that port. Thus, when the system stabilizes,
only the root switch is still generating configuration messages, and the
other switches are forwarding these messages only over ports for which
they are the designated switch. At this point, a spanning tree has been
built, and all the switches are in agreement on which ports are in use
for the spanning tree. Only those ports may be used for forwarding data
packets.

Let’s see how this works with an example. Consider what would happen in
:numref:`Figure %s <fig-elan4>` if the power had just been restored to a campus,
so that all the switches boot at about the same time. All the switches
would start off by claiming to be the root. We denote a configuration
message from node X in which it claims to be distance d from root node Y
as (Y,d,X). Focusing on the activity at S3, a sequence of events would
unfold as follows:

1. S3 receives (S2, 0, S2).

2. Since 2 < 3, S3 accepts S2 as root.

3. S3 adds one to the distance advertised by S2 (0) and thus sends
   (S2, 1, S3) toward S5.

4. Meanwhile, S2 accepts S1 as root because it has the lower ID, and it
   sends (S1, 1, S2) toward S3.

5. S5 accepts S1 as root and sends (S1, 1, S5) toward S3.

6. S3 accepts S1 as root, and it notes that both S2 and S5 are closer to
   the root than it is, but S2 has the smaller id, so it remains on S3’s
   path to the root.

This leaves S3 with active ports as shown in :numref:`Figure %s <fig-elan4>`.
Note that Hosts A an B are not able to communication over the shortest
path (via S5) because frames have to “flow up the tree and back down,”
but that’s the price you pay to avoid loops.

Even after the system has stabilized, the root switch continues to send
configuration messages periodically, and the other switches continue to
forward these messages as just described. Should a particular switch
fail, the downstream switches will not receive these configuration
messages, and after waiting a specified period of time they will once
again claim to be the root, and the algorithm will kick in again to
elect a new root and new designated switches.

One important thing to notice is that although the algorithm is able to
reconfigure the spanning tree whenever a switch fails, it is not able to
forward frames over alternative paths for the sake of routing around a
congested switch.

Broadcast and Multicast
~~~~~~~~~~~~~~~~~~~~~~~

The preceding discussion focuses on how switches forward unicast
frames from one port to another. Since the goal of a switch is to
transparently extend a LAN across multiple networks, and since most LANs
support both broadcast and multicast, then switches must also support
these two features. Broadcast is simple—each switch forwards a frame
with a destination broadcast address out on each active (selected) port
other than the one on which the frame was received.

Multicast can be implemented in exactly the same way, with each host
deciding for itself whether or not to accept the message. This is
exactly what is done in practice. Notice, however, that since not all
hosts are a member of any particular multicast group, it is possible
to do better. Specifically, the spanning tree algorithm can be
extended to prune networks over which multicast frames need not be
forwarded.  Consider a frame sent to group M by a host A in
:numref:`Figure %s <fig-elan4>`.  If host C does not belong to group
M, then there is no need for switch S4 to forward the frames over that
network.

How would a given switch learn whether it should forward a multicast
frame over a given port? It learns exactly the same way that a switch
learns whether it should forward a unicast frame over a particular
port—by observing the *source* addresses that it receives over that
port. Of course, groups are not typically the source of frames, so we
have to cheat a little. In particular, each host that is a member of
group M must periodically send a frame with the address for group M in
the source field of the frame header. This frame would have as its
destination address the multicast address for the switches.

Although the multicast extension just described was once proposed, it
was not widely adopted. Instead, multicast is implemented in exactly the
same way as broadcast.

Virtual LANs (VLANs)
~~~~~~~~~~~~~~~~~~~~

One limitation of switches is that they do not scale. It is not
realistic to connect more than a few switches, where in practice *few*
typically means “tens of.” One reason for this is that the spanning
tree algorithm scales linearly; that is, there is no provision for
imposing a hierarchy on the set of switches. A second reason is that
switches forward all broadcast frames. While it is reasonable for all
hosts within a limited setting (say, a department) to see each other’s
broadcast messages, it is unlikely that all the hosts in a larger
environment (say, a large company or university) would want to have to
be bothered by each other’s broadcast messages. Said another way,
broadcast does not scale, and as a consequence L2-based networks do
not scale.

One approach to increasing the scalability is the *virtual LAN* (VLAN).
VLANs allow a single extended LAN to be partitioned into several
seemingly separate LANs. Each virtual LAN is assigned an identifier
(sometimes called a *color*), and packets can only travel from one
segment to another if both segments have the same identifier. This has
the effect of limiting the number of segments in an extended LAN that
will receive any given broadcast packet.

.. _fig-vlan:
.. figure:: figures/impl/Slide7.png
   :width: 350px
   :align: center

   Two virtual LANs share a common backbone.

We can see how VLANs work with an example. :numref:`Figure %s
<fig-vlan>` shows four hosts and two switches. In the absence of
VLANs, any broadcast packet from any host will reach all the other
hosts. Now let’s suppose that we define the segments connected to
hosts W and X as being in one VLAN, which we’ll call VLAN 100. We also
define the segments that connect to hosts Y and Z as being in
VLAN 200. To do this, we need to configure a VLAN ID on each port of
switches S1 and S2. The link between S1 and S2 is considered to be in
both VLANs.

When a packet sent by host X arrives at switch S2, the switch observes
that it came in a port that was configured as being in VLAN 100. It
inserts a VLAN header between the Ethernet header and its payload. The
interesting part of the VLAN header is the VLAN ID; in this case, that
ID is set to 100. The switch now applies its normal rules for forwarding
to the packet, with the extra restriction that the packet may not be
sent out an interface that is not part of VLAN 100. Thus, under no
circumstances will the packet—even a broadcast packet—be sent out the
interface to host Z, which is in VLAN 200. The packet, however, is
forwarded on to switch S1, which follows the same rules and thus may
forward the packet to host W but not to host Y.

An attractive feature of VLANs is that it is possible to change the
logical topology without moving any wires or changing any addresses. For
example, if we wanted to make the link that connects to host Z be part
of VLAN 100 and thus enable X, W, and Z to be on the same virtual LAN,
then we would just need to change one piece of configuration on switch
S2.

Supporting VLANs requires a fairly simple extension to the
original 802.1 header specification, inserting a 12-bit VLAN ID
(``VID``) field between the ``SrcAddr`` and ``Type`` fields, as shown in
:numref:`Figure %s <fig-vlan-tag>`. (This VID is typically referred to as
a *VLAN Tag*.) There are actually 32-bits inserted in the middle of
the header, but the first 16-bits are used to preserve backwards
compatibility with the original specification (they use ``Type =
0x8100`` to indicate that this frame includes the VLAN extension); the
other four bits hold control information used to prioritize
frames. This means it is possible to map :math:`2^{12} = 4096` virtual
networks onto a single physical LAN.

.. _fig-vlan-tag:
.. figure:: figures/impl/Slide4.png
   :width: 500px
   :align: center

   802.1Q VLAN tag embedded within an Ethernet (802.1) 
   header.

We conclude this discussion by observing there is another limitation
of networks built by interconnecting L2 switches: lack of support for
heterogeneity. That is, switches are limited in the kinds of networks
they can interconnect. In particular, switches make use of the
network’s frame header and so can support only networks that have
exactly the same format for addresses. For example, switches can be
used to connect Ethernet and 802.11 based networks to another, since
they share a common header format, but switches do not readily
generalize to other kinds of networks with different addressing
formats, such as ATM, SONET, PON, or the cellular network. The next
section explains how to address this limitation, as well as to scale
switched networks to even larger sizes.

