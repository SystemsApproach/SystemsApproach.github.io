<!--- [!Note|style:flat|label:Bridges, Switches, and Routers|iconVisibility:hidden] --->
> **Bridges, Switches, and Routers**
>
> It is easy to become confused about the distinction between bridges,
> switches, and routers. There is good reason for such confusion, since 
> at some level, they all forward messages from one link to another. One 
> distinction people make is based on layering: Bridges are link-level 
> nodes (they forward frames from one link to another to implement an 
> extended LAN), switches are network-level nodes (they forward packets 
> from one link to another to implement a packet-switched network), and 
> routers are internet-level nodes (they forward datagrams from one 
> network to another to implement an internet). 
> 
> The distinction between bridges and switches is now pretty much 
> obsolete. For example, we have already seen that a multiport bridge is 
> usually called an Ethernet switch or LAN switch. For this reason,
> bridges and switches are often grouped together as "layer 2 devices,"
> where layer 2 in this context means "above the physical layer, below 
> the internet layer."
> 
> Historically there have been important distinctions between LAN 
> switches (or bridges) and WAN switches. LAN switches traditionally 
> depend on the spanning tree algorithm, while WAN switches generally 
> run routing protocols that allow each switch to learn the topology of 
> the whole network. This is an important distinction because knowing 
> the whole network topology allows the switches to discriminate among 
> different routes, while in contrast, the spanning tree algorithm locks 
> in a single tree over which messages are forwarded. It is also the 
> case that the spanning tree approach does not scale as well. Again,
> this distinction is under threat as routing protocols from the wide 
> area have made their way into LAN switches. 
> 
> What about switches and routers? Internally, they look quite similar 
> (as the section on switch and router implementation will illustrate). 
> The key distinction is the sort of packet they forward: IP datagrams 
> in the case of routers, and "layer 2" packets (usually Ethernet 
> frames) in the case of switches. 
> 
> One big difference between a network built from switches and the 
> Internet built from routers is that the Internet is able to 
> accommodate heterogeneity, whereas switched networks typically 
> consists of homogeneous links. This support for heterogeneity is one 
> of the key reasons why the Internet is so widely deployed. It is also 
> the fact that IP runs *over* virtually every other protocol (including 
> ATM and Ethernet) that now causes those protocols to be viewed as 
> "layer 2" technologies. 
