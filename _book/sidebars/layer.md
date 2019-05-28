<!--- [!Note|style:flat|label:What's in a Layer?|iconVisibility:hidden] --->
> **What's in a Layer**
>
> One of the important contributions of the OSI reference model 
> was to provide some vocabulary for talking about 
> protocols and, in particular, protocol layers. This vocabulary has 
> provided fuel for plenty of arguments along the lines of "Your 
> protocol does function X at layer Y, and the OSI reference model says 
> it should be done at layer Z—that's a layer violation." In fact,
> figuring out the right layer at which to perform a given function can 
> be very difficult, and the reasoning is usually a lot more complicated than 
> "What does the OSI model say?" It is partly for this reason that this 
> book avoids a rigidly layerist approach. Instead, it shows you a lot 
> of functions that need to be performed by protocols and looks at some 
> ways that they have been successfully implemented. 
> 
> In spite of our nonlayerist approach, sometimes we need convenient 
> ways to talk about classes of protocols, and the name of the layer at 
> which they operate is often the best choice. Thus, for example, this 
> chapter focuses primarily on link-layer protocols. (Bit encoding 
> is the exception, being considered a 
> physical-layer function.) Link-layer protocols can be identified by 
> the fact that they run over single links—the type of network 
> discussed in this chapter. Network-layer protocols, by contrast, run 
> over switched networks that contain lots of links interconnected by 
> switches or routers. 
> 
> Note that protocol layers are supposed to be helpful—they provide 
> helpful ways to talk about classes of protocols, and they help us 
> divide the problem of building networks into manageable subtasks. 
> However, they are not meant to be overly restrictive—the mere fact 
> that something is a layer violation does not end the argument about 
> whether it is a worthwhile thing to do. In other words, layering makes 
> a good slave, but a poor master. 
