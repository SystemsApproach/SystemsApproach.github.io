<!--- [!Note|style:flat|label:Transition from IPv4 to IPv6|iconVisibility:hidden] --->
> **Transition from IPv4 to IPv6**
>
> The most important idea behind the transition from IPv4 to IPv6 is 
> that the Internet is far too big and decentralized to have a "flag 
> day"—one specified day on which every host and router is upgraded 
> from IPv4 to IPv6. Thus, IPv6 needs to be deployed incrementally in 
> such a way that hosts and routers that only understand IPv4 can 
> continue to function for as long as possible. Ideally, IPv4 nodes 
> should be able to talk to other IPv4 nodes and some set of other 
> IPv6-capable nodes indefinitely. Also, IPv6 hosts should be capable of 
> talking to other IPv6 nodes even when some of the infrastructure 
> between them may only support IPv4. Two major mechanisms have been 
> defined to help this transition: *dual-stack operation* and 
> *tunneling*. 
> 
> The idea of dual stacks is fairly straightforward: IPv6 nodes run both 
> IPv6 and IPv4 and use the `Version` field to decide which 
> stack should process an arriving packet. In this case, the IPv6 
> address could be unrelated to the IPv4 address, or it could be the 
> "IPv4-mapped IPv6 address" described earlier in this section. 
> 
> The basic tunneling technique sends an IP packet as the 
> *payload* of another IP packet. 
> For IPv6 transition, tunneling is used to send an 
> IPv6 packet over a piece of the network that only understands IPv4. 
> This means that the IPv6 packet is encapsulated within an IPv4 header 
> that has the address of the tunnel endpoint in its header, is 
> transmitted across the IPv4-only piece of network, and then is 
> decapsulated at the endpoint. The endpoint could be either a router or 
> a host; in either case, it must be IPv6-capable to be able to process 
> the IPv6 packet after decapsulation. If the endpoint is a host with an 
> IPv4-mapped IPv6 address, then tunneling can be done automatically, by 
> extracting the IPv4 address from the IPv6 address and using it to form 
> the IPv4 header. Otherwise, the tunnel must be configured manually. In 
> this case, the encapsulating node needs to know the IPv4 address of 
> the other end of the tunnel, since it cannot be extracted from the 
> IPv6 header. From the perspective of IPv6, the other end of the tunnel 
> looks like a regular IPv6 node that is just one hop away, even though 
> there may be many hops of IPv4 infrastructure between the tunnel 
> endpoints.
