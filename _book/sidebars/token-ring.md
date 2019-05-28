<!--- [!Note|style:flat|label:Token Rings|iconVisibility:hidden] --->
> **Token Rings**
>
> For many years, there were two main ways to build a LAN: Ethernet or 
> Token Ring. The most prevalent form of token ring was invented by IBM,
> and standardized as IEEE 802.5. Token rings have a number of things in 
> common with Ethernet: the ring behaves like a single shared medium,
> and employs a distributed algorithm to decide which station can 
> transmit on to that medium at any given time; and every node on a 
> given ring can see all the packets transmitted by other nodes. 
> 
> The most obvious difference between token ring and Ethernet is the 
> topology: whereas an Ethernet is a bus, the nodes in a token ring form 
> a loop. That is, each node is connected to a pair of neighbors, one 
> upstream and one downstream. The "token" is just a special sequence 
> of bits which circulates around the ring; each node receives and then 
> forwards the token. When a node that has a frame to transmit sees the 
> token, it takes the token off the ring (i.e., it does not forward the 
> special bit pattern) and instead inserts its frame into the ring. Each 
> node along the way simply forwards the frame, with the destination 
> node saving a copy and forwarding the message onto the next node on 
> the ring. When the frame makes its way back around to the sender, this 
> node strips its frame off the ring (rather than continuing to forward 
> it) and reinserts the token. In this way, some node downstream will 
> have the opportunity to transmit a frame. The media access algorithm 
> is fair in the sense that as the token circulates around the ring,
> each node gets a chance to transmit. Nodes are serviced in a 
> round-robin fashion. 
> 
> Many commercial variants of token rings appeared over the decades, 
> with   FDDI (Fiber Distributed Data Interface) being one of the last to
> see significant deployment. In the end, token rings lost out to Ethernet,
> especially with the advent of Ethernet switching and high-speed 
> Ethernet variants.
>
> Finally, it is worth noting that just as Ethernet was inspired by the
> Aloha Network designed by researchers at the University of Hawaii,
> the first Token Rink network was originally designed by researchers
> at Cambridge University. The Cambridge Ring and Aloha were
> contemporary research projects in the mid-1970s. 
