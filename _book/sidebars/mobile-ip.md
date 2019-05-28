<!--- [!Note|style:flat|label:Mobile Ad Hoc Networks|iconVisibility:hidden] --->
> **Mobile Ad Hoc Networks**
>
> For most of this section, we've been assuming that only the end nodes
> (hosts) are mobile. This is certainly a good description of the way
> most of us deal with networks today. Our laptops and phones move
> around, and connect to fixed infrastructure, such as cell towers and
> 802.11 access points, which connect over fixed links to the Internet's
> backbone. However, many modern routers are also quite small enough to
> be mobile, and there are environments where mobile routers would be
> useful, such as building networks among moving vehicles. Because
> routing protocols are dynamic, you might imagine that the occasional
> mobile router would not be a problem, and that is roughly correct.
> However, what if all or most of the nodes in a network where mobile?
> Taken to the logical extreme, you could have a network with no fixed
> infrastructure at all—just a collection of mobile nodes, some or all
> of which function as routers. Would standard routing protocols work in
> such an environment?
> 
> The environment where everything is mobile and there is no fixed
> infrastructure is often called a Mobile ad-hoc network, or MANET (the
> latter being the name of an IETF working group tackling the problem
> space). To understand why special solutions might be needed for the
> mobile ad-hoc environment, consider the fact that, unlike a fixed
> network, the neighbors of any given ad-hoc router are likely to change
> very frequently as the nodes move. Since any change in neighbor
> relationships typically requires a routing protocol message to be
> sent, and a new routing table to be calculated, it's easy to see that
> there may be concerns about using a protocol not optimized for this
> environment. Compounding this issue is the fact that communication is
> likely to be wireless, which consumes power, and many mobile nodes are
> likely to run off power-constrained batteries. Link bandwidths are
> also likely to be constrained. Hence, reducing the overhead caused by
> sending routing protocol messages, and re-flooding them to all one's
> neighbors, is a key concern for ad-hoc routing.
> 
> Several approaches to optimizing routing for mobile ad-hoc
> environments have been developed over the years. These are broadly
> characterized as "reactive" and "proactive" approaches. OLSR
> (Optimized Link State Routing) is the dominant proactive approach, and
> its name give a good sense of what it is: it resembles a conventional
> link-state protocol (like OSPF), with a number of optimizations to
> reduce the amount of flooding of routing messages. Reactive protocols
> include AODV (Ad-hoc On demand Distance Vector) and DYMO (Dynamic
> MANET On-demand), both of which are based on distance vector
> protocols. These approaches seek to reduce the amount of routing
> protocol overhead by only building routes as needed, e.g. when a given
> node has traffic for a particular destination. There is a rich
> solution space in which tradeoffs can be made, and this space
> continues to be explored.
