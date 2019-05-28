<!--- [!Note|style:flat|label:What Layer is MPLS?|iconVisibility:hidden] --->
> **What Layer is MPLS?**
>
> There have been many debates about where MPLS belongs in the layered
> protocol architectures. Since the MPLS header is normally found
> between the layer 3 and the layer 2 headers in a packet, it is sometimes
> referred to as a layer 2.5 protocol. Some people argue that, since IP
> packets are encapsulated inside MPLS headers, MPLS must be "below" IP,
> making it a layer 2 protocol. Others argue that, since the control
> protocols for MPLS are, in large part, the same protocols as IP—MPLS
> uses IP routing protocols and IP addressing—then MPLS must be at the
> same layer as IP (i.e., layer 3). As throughtout this book, layered
> architectures are useful tools but they may not always exactly
> describe the real world, and MPLS is a good example of where strictly
> layerist views may be difficult to reconcile with reality.
> 
> To complicate this debate even further, there's a perspective that
> draws a loose connection between MPLS and DWDM (Dense Wave
> Division Multiplexing), a Layer 1 technology we briefly discussed in
> Chapter 3. This is because functionally, both technologies can be
> used to dynamically establish a "circuit" between two nodes in a
> wide-area network. In the case of DWDM this circuit corresponds to a
> wavelength at the physical level, and in the case of MPLS this circuit
> corresponds to a logical end-to-end tunnel, but in both cases, they
> can be used to change the topology of the network as seen at the IP
> layer. Or said another way, when you're sitting at L3, whether a
> change in the underlying node-to-node connectivity is actually
> implemented at L1 or L2 doesn't really concern you all that much. All
> you care about is that there is a new edge in the topology you are
> responsible for routing packets over.
