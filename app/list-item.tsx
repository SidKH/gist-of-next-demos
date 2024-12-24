"use client";

import { Button } from "@/components/ui/button";
import { Item } from "@/lib/data";
import { PencilIcon } from "lucide-react";
import { useActionState, useEffect, useState } from "react";
import { editItem } from "./actions";

export function ListItem({ item }: { item: Item }) {
  const [isEditing, setIsEditing] = useState(false);
  const [state, formAction] = useActionState(editItem, {
    content: item.content,
  });

  useEffect(() => {
    if (state.success) {
      setIsEditing(false);
    }
  }, [state]);

  if (isEditing) {
    return (
      <li className="py-2">
        <form className="flex justify-between items-center" action={formAction}>
          <input type="hidden" name="id" value={item.id} />
          <input
            className="px-2 outline-primary"
            autoFocus
            type="text"
            name="content"
            defaultValue={state.content}
          />
          <Button type="submit">Save</Button>
        </form>
      </li>
    );
  }

  return (
    <li className="py-2 px-2 flex justify-between items-center">
      {state.content}
      <Button onClick={() => setIsEditing(true)} size="icon" variant="outline">
        <PencilIcon />
      </Button>
    </li>
  );
}
