// See https://aka.ms/new-console-template for more information

using System.Xml;
using day5xml;

cust[] crs = new cust[3];
crs[0] = new cust() { id = 11, name = "uday" };
crs[1] = new cust() { id = 12, name = "vamsi" };
crs[2] = new cust() { id = 13, name = "havish" };
using (XmlWriter xmlw = XmlWriter.Create("course.xml"))
{
    xmlw.WriteStartDocument();
    xmlw.WriteStartElement("custmers");
    foreach (cust c in crs)
    {
        xmlw.WriteStartElement("custmer");
        xmlw.WriteAttributeString("cid", c.id.ToString());
        xmlw.WriteAttributeString("no", c.id.ToString());
        xmlw.WriteElementString("cname", c.name);
        // Console.WriteLine(c.Cid+" "+c.Name);
        xmlw.WriteEndElement();
    }
    xmlw.WriteEndElement();
    xmlw.WriteEndDocument();
    Console.WriteLine();
}