<!--- [!Note|style:flat|label:Optical Networking|iconVisibility:hidden] --->
> **Optical Networking**
>
> Our focus on packet-switched networks is obsuring the fact that,
> especially in wide-area settings, the underlying physical transport is 
> all-optical: there are no packets. At this layer, commercially 
> available DWDM (*Dense Wavelength Division Multiplexing*) 
> equipment is able to transmit a large numbers of optical wavelengths 
> (colors) down a single fiber. For example, one might send data 
> on 100 or more different wavelengths, and each wavelength might carry 
> as much as 100 Gbps of data. 
> 
> Connecting these fibers is an optical device called a ROADM (*Reconfigurable 
> Optical Add/Drop Multiplexers*). A collection of ROADMs (nodes) 
> and fibers (links) form an optical transport network, where each ROADM 
> is able to forward individual wavelengths along a multi-hop path,
> creating a logical end-to-end circuit. From the perspective of a 
> packet-switched network that might be constructed on top of this 
> optical transport, one wavelength, even it it crosses multiple ROADMs,
> appears to be a single point-to-point link between two switches, over 
> which one might elect to run SONET or 100-Gbps Ethernet as the framing 
> protocol. The "reconfigurability" feature of ROADMs means that it is 
> possible to change these underlying end-to-end wavelengths,
> effectively creating a new topology at the packet-switching layer. 
> 
> We don't cover optical networking extensively in this book, in part 
> because of space considerations. For many practical purposes, you can 
> think of optical networks as a piece of the infrastructure that 
> enables telephone companies to provide SONET links or other types of 
> circuits where and when you need them. However, it is worth noting 
> that many of the technologies that are discussed later in this book,
> such as routing protocols and multiprotocol label switching, do have 
> application to the world of optical networking. It is also the case 
> that the networking industry is experimenting with technologies to 
> converge the optical and packet layers, creating a so-called 
> *packet-optical* network. 
